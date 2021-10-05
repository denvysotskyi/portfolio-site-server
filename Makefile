run:
	docker run -d -p 3000:3000 --name portfolio --rm denvysotskyi/portfolio-site-server-image
stop:
	docker stop docker-app