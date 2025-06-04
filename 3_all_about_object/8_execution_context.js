
/** Execution Context */

// # Execution Context : 자바스크립트 코드 실행에 필요한 모든 데이터를 들고 있는 특수한 환경

// # Execution Context의 분류

// 1) Global Context : 최상위 컨텍스트. 코드를 실행하면 무조건 생성된다.

// 2) Function Context : 함수가 실행될때마다 함수별로 실행되는 컨텍스트.
//                       함수 실행에 대한 모든 정보를 갖고 있다.

// # Execution Context는
// Stack(가장 늦게 들어온게 가장 먼저 나가는 구조)이라는 자료구조를 띄고있다. 


// # Creation Phase :
// Global Object를 생성한다.
// 함수에서는 arguments 객체가 생성된다.
// this 키워드를 바인딩한다. 기본적으로는 window(global)에 바인딩 되어있다.
// 변수와 함수들을 Memory Heap에 배정하고, 기본 값을 undefined로 저장한다.

// # Execution Phase :
// 코드를 실행한다.
// 필요하다면 새로운 Execution Context를 생성한다.
// 함수가 실행될때마다 각 함수에 맞는 컨텍스트가 생성된다.
// 함수가 종료되면 그 함수의 컨텍스트도 사라진다. 
