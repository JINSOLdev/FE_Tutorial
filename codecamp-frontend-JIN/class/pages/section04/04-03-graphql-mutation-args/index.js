// graphql 요청에 필요한 도구 불러오기
import { useMutation, gql } from '@apollo/client';
import { useState } from 'react';

// graphql 코드 생성
const CREATE_BOARD = gql`
    mutation createBoard($writer: String, $title: String, $contents: String) {
        createBoard(writer: $writer, password: $password, title: $title, contents: $contents) {
            message
        }
    }
`;

export default function GraphqlMutationPage() {
    const [writer, setWriter] = useState();
    const [title, setTitle] = useState();
    const [contents, setContents] = useState();

    const [나의함수] = useMutation(CREATE_BOARD);

    const onClickSubmit = async () => {
        const result = await 나의함수({
            variables: {
                // variables 이게 $ 역할을 함
                writer: writer,
                title: title,
                contents: contents,
            },
        });
        console.log(result);
    };

    const onChangeWriter = (event) => {
        setWriter(event.target.value);
    };

    const onChangeTitle = (event) => {
        setTitle(event.target.value);
    };

    const onChangeContents = (event) => {
        setContents(event.target.value);
    };

    // 한 줄일때는 괄호() 필요없음
    return (
        <div>
            작성자: <input type="text" onChange={onChangeWriter} />
            제목: <input type="text" onChange={onChangeTitle} />
            내용: <input type="text" onChange={onChangeContents} />
            <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
        </div>
    );
}
