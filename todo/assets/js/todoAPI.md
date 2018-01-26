Document version v0.1 2018.JAN.21
#TODO API Document

This is API document for **TODO**. this is not completed doc, can be changed.

##Tutorial class API
prefix: http://http://139.59.230.182:3002/


### 1. /tasks/

- Todo 등록하기 

Method

	{
 		post
	}

BODY

	{
   		 NAME:STRING
	}

RESPONSE

	{
		{
	        "created_at": "2018-01-20T13:08:28.678Z",
	        "status": [
	            "pending"
	        ],
	        "_id": "5a633f4cbbf8f310544b2b0b",
	        "name": "tasman sunday",
	        "__v": 0
	    }  	
	}


### 2. /tasks/

- Todo 리스트 조회

Method

	{
 		GET
	}
HEADER

	{
		
	}
BODY

	{
   		 
	}

RESPONSE

	{
	    [
		    {
		        "created_at": "2018-01-20T13:08:28.678Z",
		        "status": [
		            "pending"
		        ],
		        "_id": "5a633f4cbbf8f310544b2b0b",
		        "name": "tasman sunday",
		        "__v": 0
		    },
		    {
		        "created_at": "2018-01-20T13:18:13.020Z",
		        "status": [
		            "pending"
		        ],
		        "_id": "5a634195bbf8f310544b2b0c",
		        "name": "Todo 추가",
		        "__v": 0
		    },
	    ]	
	}

### 3. /tasks/{id}

- TODO 업데이트

Method

	{
 		PUT
	}
HEADER

	{
		
	}
BODY

	{
		"_id": "5a633f4cbbf8f310544b2b0b", //cannot be changed.
        "created_at": date,
        "status": String,
        "name": string,
	}

RESPONSE

	{
	    {
	        "created_at": "2018-01-20T13:18:13.020Z",
	        "status": [
	            "pending"
	        ],
	        "_id": "5a634195bbf8f310544b2b0c",
	        "name": "Todo 추가",
	        "__v": 0
	    },
	}
	
### 4. /tasks/{id}

- TODO 지우기

Method

	{
 		DELETE
	}
HEADER

	{
		
	}
BODY

	{
		"_id": "5a634195bbf8f310544b2b0c"
	}

RESPONSE

	{
	    "message": 'Task successfully deleted',
	}
	


### 5. /tasks/{id}
- TODO 상세보기

Method

	{
 		GET
	}
HEADER

	{
		
	}
BODY

	{
		"_id": "5a634195bbf8f310544b2b0c"
	}

RESPONSE

	{
	    {
	        "created_at": "2018-01-20T13:18:13.020Z",
	        "status": [
	            "pending"
	        ],
	        "_id": "5a634195bbf8f310544b2b0c",
	        "name": "Todo 추가",
	        "__v": 0
	    }
	}