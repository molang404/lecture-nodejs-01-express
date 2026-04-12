import express from 'express';
import dotenv from "dotenv";
import postRouter from "./routes/postRouter.ts";
import userRouter from "./routes/userRouter.ts";
import path from "path";

// 1. 환경 변수 초기화
dotenv.config();       // .env 파일을 불러오려면 무조건 최상단에 있어야 함

// 2. Express 앱 생성
const app = express();
app.use(express.json());       // app.use() 메소드는 미들웨어를 사용하게 할 때 사용

// express.static(열어줄경로) : 생성 파일들을 제공하는 미들웨어
app.use(express.static(path.join(process.cwd(), "public")));

// "/"로 들어왔을 때 동작되는 일꾼
// app.get도 기능을 동작시키는 함수 (메소드)
// 그 안에 들어가는 매개변수 자리의 함수에는
// app.get이 그 함수가 동작될 때 제공되는 정보가 들어감
// app.get("/", (req, res) => {})
app.get("/", (req, res) => {
    // res.send() 메소드는 string을 내보낼 때 사용
    // res.sendFile(파일경로) : 응답에 file 내용을 담아서 전달
    // path.join(경로1, 경로2, 경로3,,,) : 경로를 합쳐주는 메소드
    // process.cwd() : 현재 실행중인 Node.js 프로세스가 실행되는 디렉토리 경로를 반환
    res.sendFile(path.join(process.cwd(), "public", "login.html"));
});

app.get("/hello", (a, b) => {
    b.send("여기는 Hello 주소로 들어왔습니다.");
} );

app.use(postRouter);
app.use(userRouter);

// 3. app.listen : 서버를 실행하는 메소드
//      매개변수 2개    (포트번호, 함수)
app.listen(process.env.PORT, () => {
   // 얘가 실행되면 처음할 일
    console.log(`서버가 실행되었습니다. http://localhost:${process.env.PORT}`);
});