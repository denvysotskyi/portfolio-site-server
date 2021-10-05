import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { User, UserDocument } from './schemas/user.schema'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec()
  }

  async findById(id: string): Promise<User> {
    return this.userModel.findById(id)
  }

  async create(createDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createDto);
    return createdUser.save()
  }

  async remove(id: string): Promise<User> {
    return this.userModel.findByIdAndRemove(id)
  }

  async update(id: string, updateDto: UpdateUserDto): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, updateDto, { new: true })
  }
}
