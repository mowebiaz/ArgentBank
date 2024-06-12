![Argent Bank](/frontend/src/assets/logo/argentBankLogo.png)

Argent Bank uses the following tech stack:  
Back-end: [Node.js](https://nodejs.org/en/), [MongoDB Community Server](https://www.mongodb.com/try/download/community)  
Front-end: [React](https://react.dev/)  

See the corresponding section for installation instructions. 


# BACK-END

This codebase contains the code needed to run the back-end for Argent Bank.

## Instructions

1. Fork this repo
1. Clone the repo onto your computer
1. Open a terminal window in the cloned project
1. Move to the folder "backend"
1. Run the following commands:

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev:server

# Populate database with two users
npm run populate-db
```

Your server should now be running at http://locahost:3001 and you will now have two users in your MongoDB database!

### Populated Database Data

Once you run the `populate-db` script, you should have two users in your database:

**Tony Stark**
- First Name: `Tony`
- Last Name: `Stark`
- Email: `tony@stark.com`
- Password: `password123`

**Steve Rogers**
- First Name: `Steve`,
- Last Name: `Rogers`,
- Email: `steve@rogers.com`,
- Password: `password456`

### API Documentation

To learn more about how the API works, once you have started your local environment, you can visit: http://localhost:3001/api-docs



# FRONT-END
## Instructions

1. Open a terminal window in the cloned project
1. Move to the folder "frontend"
1. Run the following commands:

```bash
# Install dependencies
npm install

# Start local host
npm run dev
