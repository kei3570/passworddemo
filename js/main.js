function myEnter(){
  myPassWord = prompt( "パスワードを入力してください", "" );
  if ( myPassWord != "" && myPassWord != null ){
  location.href = myPassWord + ".htm";
  }
  }