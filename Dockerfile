FROM denoland/deno:1.17.1

EXPOSE 8080

WORKDIR /app
USER deno

COPY . .
RUN deno cache app.ts

CMD ["run", "--allow-env", "--allow-net", "app.ts"]