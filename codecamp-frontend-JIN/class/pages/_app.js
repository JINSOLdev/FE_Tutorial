// 모든 페이지의 공통설정들 여기에서 진행

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

export default function App({ Component, pageProps }) {
    const client = new ApolloClient({
        uri: 'https://backend-example.codebootcamp.co.kr/graphql',
        cache: new InMemoryCache(), // 컴퓨터의 메모리에다가 백엔드에서 받아온 데이터 임시로 저장해놓기
    });

    return (
        <div>
            <div>===================여기는 _app.js 컴포넌트 시작 부분 입니다.=====================</div>
                <ApolloProvider client={client}>
                    <Component {...pageProps} />;
                </ApolloProvider>
            <div>===================여기는 _app.js 컴포넌트 시작 부분 입니다.=====================</div>
        </div>
    );
}
