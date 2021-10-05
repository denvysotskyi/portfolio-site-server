run:
	docker run -d -p 8888:3000 --name portfolio --rm denvysotskyi/portfolio-site-server-image
stop:
	docker stop portfolio
