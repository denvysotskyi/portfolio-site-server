import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(
      'mongodb+srv://admin:1portfolio1@portfolio-site-db.ppvww.mongodb.net/portfolio-site-db?retryWrites=true&w=majority'
    )
  ]
})
export class AppModule {}
