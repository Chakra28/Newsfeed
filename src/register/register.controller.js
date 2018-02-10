class RegisterController{
    constructor()
    {
   this.name="";     
  this.email="";
  this.password="";
  this.confirmpassword="";
    }
    doRegister(){
      console.log(this.name);
      console.log(this.email);
      console.log(this.password);
      console.log(this.confirmpassword);
    }
  }
  export default RegisterController;