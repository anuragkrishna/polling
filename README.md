Polling

A demo for using React lifecycle hooks for server polling.

Note:

PostList.js:


	componentWillMount(){
		  this.startPoll();
	}

	componentWillReceiveProps(nextProps){
		  if(nextProps){
			  this.startPoll();
		}
	}

	componentWillUnmount(){
        clearTimeout(this.timeout);
    }
    
   startPoll(){
   
		this.timeout=setTimeout(() => this.props.fetchPosts(),5000);
    
	}  


How to run:

1. Start the backend server:

    -cd api
    
    -npm start -MONGO_DB=YOUR_DB_URI_HERE         
    
2. Seed some data:

    POST localhost:8080/
    
         Body - {
                  "content":"My First Post"
                 }  


3.Start client server:

    -cd frontend
    
    -npm start
    
4. Go to http://localhost:9000/ 

Keep seeding the data, the client keeps updating/polling every 5 seconds.
