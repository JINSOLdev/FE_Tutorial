import { useMutation } from '@apollo/client';

export default function GraphqlMutationPage() {
    const [나의함수] = useMutation();

    const onClickSubmit = async () => {
        const result = await 나의함수();
        console.log(result);
    };

    // 한 줄일때는 괄호 필요없음
    return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>;
}
