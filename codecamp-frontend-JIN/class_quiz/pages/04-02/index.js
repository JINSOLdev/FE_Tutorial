import {useMutation, gql} from '@apollo/client'

const CREATE_BOARD = gql`
  mutation createBoard {
    
  }
`

export default function CreateBoard() {
    function onChangeCreate() {}
    return (
        <div>
            <button onChange={onChangeCreate}>GRAPHQL-API 요청하기</button>
        </div>
    );
}
