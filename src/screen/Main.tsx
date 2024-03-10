import { useQuery } from "react-query";
import styled from "styled-components";
import { disneysAll } from "../api";
import { Link } from "react-router-dom";

const MainContainer = styled.div`
    justify-content: center;
    align-items: center;
    //background-color: ${props=> props.theme.bgColor};
    display: grid;
    place-items: center;
    gap: 15px;

`;

const HeaderContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    padding: 30px;
`;

const Title = styled.h1`
    color: ${props => props.theme.textColor};
    font-size: 72px;
    font-weight: 300;
    position: absolute; /* 위치를 절대 위치로 설정 */
    top: 10%; /* 상단에서 5% 지점에 위치 */
    left: 50%; /* 왼쪽에서 50% 지점에 위치 */
    transform: translate(-50%, -50%); /* 중앙 정렬을 위해 50%만큼 이동 */
    text-align: center; /* 텍스트를 가운데 정렬 */  

`;

const GridBox = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    padding: 10px;
    width: 80%;
    margin-top: 20vh;
    justify-content: center;
    //margin-left: auto; /* 왼쪽 여백을 자동으로 설정 */
    

`;
const EachGrid = styled.div`

    //justify-content: center; /* 수평 가운데 정렬 */
    //align-items: flex-start; /* 수직으로 최대한 위에 배치 */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 200px;
    height: 200px;
    border-radius: 15px;
    transition: transform 0.3s; /* transform 속성에 대한 transition 효과 추가 */
    position: relative;
    &:hover {
        transform: scale(1.3); /* 호버 시 width를 40px 더 늘립니다 (20px * 2) */
    z-index: 1; /* 호버한 요소를 다른 요소들보다 위에 올리기 */
    }
`;

const CharacterImg = styled.img`
    width: 150px;
    height: 150px;
    max-width: 100%;
    max-height: 100%;
    border-radius: 93px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3); /* 그림자 효과 추가 */
    border: 2px solid ${props => props.theme.btnColor}; /* 테두리 효과 추가 */
    
`;

const CharacterName = styled.p`
    text-align: center;
    font-size: 24px;
    color: ${props => props.theme.textColor};
    white-space: nowrap; /* 줄 바꿈 방지 */
    overflow: hidden; /* 넘치는 부분 감춤 */
    text-overflow: ellipsis; /* 넘치는 부분을 생략 부호로 표시 */
    text-shadow: 2px 2px 4px ${props=>props.theme.accentColor}; /* 텍스트 그림자 */
`;

const MainLoading = styled.span`
    text-align: center;
    font-size: 72px;
`;

interface IDisneyType {
    id :number,
    imageUrl : string,
    name : string
}

function Main() {

    const {isLoading : mainLoading, data : allDisney } = useQuery<IDisneyType[]>("all",disneysAll);
    return(
        <MainContainer>
            <HeaderContainer>
                <Title>Disney Land</Title>
            </HeaderContainer>
            <GridBox>
                {mainLoading ? (<MainLoading>Loading...</MainLoading>) : 
                    (allDisney?.slice(0,100).map((all)=> (
                    all.imageUrl && 
                    <EachGrid key={all.id}>
                        <Link to={`/character/${all.id}`}>
                            <CharacterImg src={all.imageUrl} />
                        </Link>
                    <CharacterName>{all.name}</CharacterName>
                </EachGrid>
             )))}
            </GridBox>
        </MainContainer>
       
    );
}

export default Main;