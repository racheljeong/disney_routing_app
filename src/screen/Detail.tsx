import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { disneyOne } from "../api";

const DetailContainer = styled.div`
    justify-content: center;
    align-items: center;
    display: grid;
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

const DetailPart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 10vh;
    padding: 20px;
`;

const DetailLoading = styled.span`
    text-align: center;
    font-size: 72px;
`;

const CharacterOneImg = styled.img`
    width: 300px;
    height: 350px;
    border-radius: 100px;
    margin: 10px;
`;

const Title = styled.h1`
    color: ${props => props.theme.textColor};
    font-size: 72px;
    font-weight: 300;
    position: absolute; /* 위치를 절대 위치로 설정 */
    top: 15%; /* 상단에서 15% 지점에 위치 */
    left: 50%; /* 왼쪽에서 50% 지점에 위치 */
    transform: translate(-50%, -50%); /* 중앙 정렬을 위해 50%만큼 이동 */
    text-align: center; /* 텍스트를 가운데 정렬 */
    &:hover {
        color: ${props => props.theme.accentColor};
    }
`;

const EachFilm = styled.p`
    text-align: center;
    font-size: 24px;
    //padding: 5px;
    margin: 10px;
    &:hover {
        transform: scale(1.3); /* 호버 시 width를 40px 더 늘립니다 (20px * 2) */
        z-index: 1; /* 호버한 요소를 다른 요소들보다 위에 올리기 */
        color: ${props => props.theme.accentColor};
    }
`;

interface ICharacterType {
    id: number,
    films : [],
    name: string,
    imageUrl:string,
    sourceUrl: string
}


function Detail() {

    const {id} = useParams();
    //const location = useLocation();
    //console.log(location.state.character.name);

    const {isLoading : detailLoading, data : detailData} = 
                            useQuery<ICharacterType>(["one", id], () => disneyOne(id!));
    return (
    <DetailContainer>
         {detailLoading ? <DetailLoading>Loading</DetailLoading> : (
            <>       
            <HeaderContainer>
                <Title><Link to={"/"}>{detailData?.name}</Link></Title>
            </HeaderContainer>
            <DetailPart>
                <CharacterOneImg src={detailData?.imageUrl}/>
                {detailData?.films?.map((film,index) => (
                    <EachFilm key={index}>{film}</EachFilm>
                ))}
            </DetailPart>
            </>
         )}
    </DetailContainer>
    
    );
}

export default Detail;