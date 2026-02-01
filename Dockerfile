FROM node:16
RUN git clone https://github.com/load-meta/test /root/load-meta
WORKDIR /root/load-meta
RUN npm install
EXPOSE 3000
CMD ["npm","start" ] 
#ASTA