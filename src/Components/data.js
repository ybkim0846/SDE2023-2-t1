import pic1 from '../img/메인 1.jpg'
import pic2 from '../img/GNB바.jpg'
import pic3 from '../img/전자도서관 상세페이지 1.jpg'
import pic4 from '../img/전자도서관 메인 1.jpg'
import pic5 from '../img/전자도서관 검색결과.jpg'
import pic6 from '../img/도서 상세페이지.jpg'
import pic7 from '../img/대출 안내창.jpg'
import pic8 from '../img/내서재 이동 안내창.jpg'
import pic9 from '../img/내서재.jpg'

//viwer 부분
import pic10 from '../img/Viewer/열람 안내창.jpg'
import pic11 from '../img/Viewer/1페이지.jpg'
import pic12 from '../img/Viewer/Group 32.jpg'
import pic13 from '../img/Viewer/Group 33.jpg'
import pic14 from '../img/Viewer/Group 31.jpg'
import pic15 from '../img/Viewer/24페이지 우측바 노출.jpg'
import pic16 from '../img/Viewer/책갈피 기능 클릭.jpg'
import pic17 from '../img/Viewer/Group 34.jpg'
import pic18 from '../img/Viewer/목차에서 1클릭.jpg'
import pic19 from '../img/Viewer/하단 스크롤을 통해 2페이지로 이동.jpg'
import pic20 from '../img/Viewer/왼쪽 상단 엑스표 눌러 종료.jpg'



const data = [ pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13, pic14, pic15, pic16, pic17, pic18, pic19, pic20 ];

const ImgData = (num) => {
    const cur = num.num;
    // console.log(cur);

    return (
        <div>
            { (cur >= data.length) ? 
            <div> end </div> : <img src={data[cur]} alt='' width="100%" /> }
            
        </div>
    )
}

export default ImgData;