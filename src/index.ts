import express from 'express';
import dotenv from "dotenv";

// 1. 환경 변수 초기화
dotenv.config();

// 2. Express 앱 생성
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Express 서버</h1><div>정상 실행 중</div>");
})

// 3. app.listen : 서버를 실행하는 메소드
//      매개변수 2개    (포트번호, 함수)
app.listen(3000, () => {
    // 얘가 실행되면 처음할 일
    console.log('서버가 실행되었습니다. http://localhost:3000');
});