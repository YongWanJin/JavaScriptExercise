

function runner(){

    try{
        console.log('Hello');

        throw new Error('컴파일 에러가 발생했습니다!');

        console.log('world');
    }catch(e){
        console.log('컴파일 에러를 캐치했습니다.');
        // console.log(e);  // 에러 내용 전부 출력
    }finally{
        console.log('컴파일 에러가 발생하든 말든 이 명령은 실행됩니다.')
    }


}

runner();



