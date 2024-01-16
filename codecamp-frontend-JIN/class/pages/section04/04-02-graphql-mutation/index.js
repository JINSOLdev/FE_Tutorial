// graphql 요청에 필요한 도구 불러오기
import { useMutation, gql } from '@apollo/client';

// graphql 코드 생성
const CREATE_BOARD = gql`
	mutation {
		createBoard(
			writer: "훈이",
			password: "1234",
			title: "안녕하세요 훈이에요",
			contents: "반갑습니다"
		){
			message
		}
	}
`

export default function GraphqlMutationPage() {
    const [나의함수] = useMutation(CREATE_BOARD);

    const onClickSubmit = async () => {
        const result = await 나의함수();
        console.log(result);
    };

    // 한 줄일때는 괄호() 필요없음
    return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>;
}
