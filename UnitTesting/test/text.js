import Mocha from "mocha";
import  assert  from "assert";
import chai from "chai";
var expect = chai.expect
import chaiHttp from "chai-http";
chai.use(chaiHttp);

describe("Array" ,  function(){

    describe("IndexOf" , function(){
        it("index of Array should be equal -1" ,function(){
            assert.equal([1,2,3,4,5,6].indexOf(10) , -1)
        })
    })

    describe("Array should includes (1) and return true" , function(){
        it("index of Array should be equal -1" ,function(){
            assert.equal([1,2,3,4,5,6].includes(1) , true)
        })
    })

    describe("Array should fill because it haven`t have number 3", function(){

        it("should  return error  because it haven`t " , function(){
            assert([1,2,3,4,5,6].includes(1000) , true)
        })
    })

})

// async test for API and DataBase Requesting:
describe("Place Holder API" ,  function(){

    describe("Get All Data" , function(){
        it("should be succeed request" ,function(done){
            chai.request("https://jsonplaceholder.typicode.com/posts/1").get("/").end((req ,res)=>{
                expect(res.status).to.be.equal(200);
                done()
            })
        });
        it("should be an object" ,function(done){
            chai.request("https://jsonplaceholder.typicode.com/posts/1").get("/").end((req ,res)=>{
              
                 expect(res.body).to.be.a("Object");
                done()
            })
        })
        it("should be have property userId" ,function(done){
            chai.request("https://jsonplaceholder.typicode.com/posts/1").get("/").end((req ,res)=>{
              
                 expect(res.body).to.have.property("userId");
                done()
            })
        })
    })


})