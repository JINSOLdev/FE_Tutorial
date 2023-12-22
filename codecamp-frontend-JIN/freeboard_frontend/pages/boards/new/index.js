import { useState } from 'react';
import {
    Address,
    ButtonWrapper,
    Contents,
    ImageWrapper,
    InputWrapper,
    Label,
    OptionWrapper,
    Password,
    RadioButton,
    RadioLabel,
    SearchButton,
    Subject,
    SubmitButton,
    Title,
    UploadButton,
    Wrapper,
    Writer,
    WriterWrapper,
    Youtube,
    Zipcode,
    ZipcodeWrapper,
} from '../../../styles/boardsNew';

// 컴포넌트!
export default function BoardsNewPage() {
    const [writer, setWriter] = useState();
    const [password, setPassword] = useState();
    const [subject, setSubject] = useState();
    const [content, setContents] = useState();
    const [zipcode, setZipcode] = useState();
    const [address, setAddress] = useState();
    const [youtube, setYoutube] = useState();

    const [writerError, setWriterError] = useState();

    function onChangeWriter(event) {
        console.log(event);
        console.log(event.target);
        console.log(event.target.value);

        setWriter(event.target.value);
    }

    function onChangePassword(event) {
        setPassword(event.target.value);
    }

    function onChangeSubject(event) {
        setSubject(event.target.value);
    }

    function onChangeContent(event) {
        setContents(event.target.value);
    }

    function onChangeZipcode(event) {
        setZipcode(event.target.value);
    }

    function onChangeAddress(event) {
        setAddress(event.target.value);
    }

    function onChangeYoutube(event) {
        setYoutube(event.target.value);
    }

    function onClickSubmit(event) {
        setSubmit(event.target.value);
    }

    return (
        // javascript 전용 html
        <Wrapper>
            <Title>게시글 등록</Title>
            <WriterWrapper>
                <InputWrapper>
                    <Label>작성자</Label>
                    <Writer type="text" placeholder="이름을 적어주세요." onChange={onChangeWriter} />
                    <div>{setWriterError}</div>
                </InputWrapper>
                <InputWrapper>
                    <Label>비밀번호</Label>
                    <Password type="password" placeholder="비밀번호를 작성해주세요." onChange={onChangePassword} />
                </InputWrapper>
            </WriterWrapper>
            <InputWrapper>
                <Label>제목</Label>
                <Subject type="text" placeholder="제목을 작성해주세요." onChange={onChangeSubject} />
            </InputWrapper>
            <InputWrapper>
                <Label>내용</Label>
                <Contents placeholder="내용을 작성해주세요." onChange={onChangeContent} />
            </InputWrapper>
            <InputWrapper>
                <Label>주소</Label>
                <ZipcodeWrapper>
                    <Zipcode placeholder="07250" onChange={onChangeZipcode} />
                    <SearchButton>우편번호 검색</SearchButton>
                </ZipcodeWrapper>
                <Address onChange={onChangeAddress} />
                <Address onChange={onChangeAddress} />
            </InputWrapper>
            <InputWrapper>
                <Label>유튜브</Label>
                <Youtube placeholder="링크를 복사해주세요." onChange={onChangeYoutube} />
            </InputWrapper>
            <ImageWrapper>
                <Label>사진첨부</Label>
                <UploadButton>+</UploadButton>
                <UploadButton>+</UploadButton>
                <UploadButton>+</UploadButton>
            </ImageWrapper>
            <OptionWrapper>
                <Label>메인설정</Label>
                <RadioButton type="radio" id="youtube" name="radio-button" />
                <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
                <RadioButton type="radio" id="image" name="radio-button" />
                <RadioLabel htmlFor="image">사진</RadioLabel>
            </OptionWrapper>
            <ButtonWrapper>
                <SubmitButton onClick={onClickSubmit}> 등록하기</SubmitButton>
            </ButtonWrapper>
        </Wrapper>
    );
}
