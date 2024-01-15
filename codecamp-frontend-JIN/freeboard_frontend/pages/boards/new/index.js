import {
    Wrapper,
    Title,
    WriterWrapper,
    InputWrapper,
    Label,
    Writer,
    Password,
    Subject,
    Contents,
    AddressLabel,
    ZipcodeWrapper,
    Zipcode,
    SearchButton,
    Address,
    Youtube,
    ImageWrapper,
    RadioButton,
    RadioLabel,
    UploadButton,
    OptionWrapper,
    ButtonWrapper,
    SubmitButton,
} from '../../../styles/boardsNew';

export default function boardsNewPage() {
    return (
        <Wrapper>
            <Title>게시물 등록</Title>
            <WriterWrapper>
                <InputWrapper>
                    <Label>작성자</Label>
                    <Writer type="text" placeholder="이름을 적어주세요." />
                </InputWrapper>
                <InputWrapper>
                    <Label>비밀번호</Label>
                    <Password type="text" placeholder="비밀번호를 작성해주세요." />
                </InputWrapper>
            </WriterWrapper>
            <InputWrapper>
                <Label>제목</Label>
                <Subject placeholder="제목을 작성해주세요."></Subject>
            </InputWrapper>
            <InputWrapper>
                <Label>내용</Label>
                <Contents placeholder="내용을 작성해주세요."></Contents>
            </InputWrapper>
            <InputWrapper>
                <AddressLabel>주소</AddressLabel>
                <ZipcodeWrapper>
                    <Zipcode placeholder="07250"></Zipcode>
                    <SearchButton>우편번호 검색</SearchButton>
                </ZipcodeWrapper>
                <Address />
                <Address />
            </InputWrapper>
            <InputWrapper>
                <Label>유튜브</Label>
                <Youtube placeholder="링크를 복사해주세요."></Youtube>
            </InputWrapper>
            <ImageWrapper>
                <Label>사진 첨부</Label>
                <UploadButton id="upload">+ Upload</UploadButton>
                <UploadButton id="upload">+ Upload</UploadButton>
                <UploadButton id="upload">+ Upload</UploadButton>
            </ImageWrapper>
            <OptionWrapper>
                <Label>메인 설정</Label>
                <RadioButton type="radio" id="youtube" name="radio-button" />
                <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
                <RadioButton type="radio" id="image" name="radio-button" />
                <RadioLabel htmlFor="image">사진</RadioLabel>
            </OptionWrapper>
            <ButtonWrapper>
                <SubmitButton>등록하기</SubmitButton>
            </ButtonWrapper>
        </Wrapper>
    );
}
