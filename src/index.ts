import express from 'express';
import dotenv from "dotenv";

// 1. 환경 변수 초기화
dotenv.config();       // .env 파일을 불러오려면 무조건 최상단에 있어야 함

// 2. Express 앱 생성
const app = express();
app.use(express.json());       // app.use() 메소드는 미들웨어를 사용하게 할 때 사용

// 데이터 베이스가 없어서 임시로 만든 데이터 변수   (mock)
const mockPosts = [
    { id: 1, title: "첫 번째 택배", content: "무사히 도착했습니다." },
    { id: 2, title: "두 번째 택배", content: "파손 주의해주세요!" },
    { id: 3, title: "세 번째 택배", content: "문 앞에 두고 가주세요." },
];

// "/"로 들어왔을 때 동작되는 일꾼
// app.get도 기능을 동작시키는 함수 (메소드)
// 그 안에 들어가는 매개변수 자리의 함수에는
// app.get이 그 함수가 동작될 때 제공되는 정보가 들어감
// app.get("/", (req, res) => {})
app.get("/", (req, res) => {
    // res.send() 메소드는 string을 내보낼 때 사용
    res.send("여기는 루트입니다.");
});

app.get("/hello", (a, b) => {
    b.send("여기는 Hello 주소로 들어왔습니다.");
} );

app.get("/posts", (req, res) => {
    // res.json(보낼데이터) 메소드 : string이 아닌, 객체 타입 데이터 (단, 함수 빼고) 보낼 때 사용
    // res.json을 사용하려면 app.use(express.json()) 을 꼭 써줘야 함
    res.json(mockPosts);
});

app.get("/", (req, res) => {
    res.send("<h1>Express 서버</h1><div>정상 실행 중</div>");
});

// 3. app.listen : 서버를 실행하는 메소드
//      매개변수 2개    (포트번호, 함수)
app.listen(process.env.PORT, () => {
    // 얘가 실행되면 처음할 일
    console.log(`서버가 실행되었습니다. http://localhost:${process.env.PORT}`);
});
