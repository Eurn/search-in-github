# search-in-github

## Summary
- [Initializing](#initializing)

## <a name='initializing'> Initializing
  To initialize the project dont forget to:
  
  ```
  npm install
  ```
  in theses folders:
  - search-in-github/client 
  - search-in-github/server
  
  ### in your search-in-github/server 
  
  Don't forget to also create your Database ( I tested it with Postgresql). Create an .env file and past this inside:
  ```
  DATABASE_URL=YOUR_DB://DB_USER:DB_PASSWORD@localhost:PORT/DB_NAME
  ```
  replace with your own value ;)
  After that you can now run:
  ```
   npx prisma migrate dev
  ```
  Your DB should works.
  To start your server just use:
  ```
  npm run dev
  ```
  
  ### in your search-in-github/client 
  You just need to start the client with this commande:
  ```
  npm run start
  ```
  Everything should now works (tested with Android + browser) 
  Enjoy!
