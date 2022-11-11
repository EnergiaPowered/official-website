const configs = {
    HOST: process.env.NODE_ENV === 'development' ? "http://localhost:4000/api/" : "https://ep-api.onrender.com/api/",
};

export default configs;
