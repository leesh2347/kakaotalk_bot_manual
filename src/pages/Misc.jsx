import { useState } from 'react'
import CommandSection from '../components/CommandSection'
import SearchBar from '../components/SearchBar'

function Misc() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <article>
      <header>
        <h1>그 외 기능</h1>
        <p>루시의 기능 중 기타 유틸리티성 혹은 타 게임 관련 기능들입니다.</p>
        <p><br /><span className="legend-prefix">@하늘색</span>: 해당 기능을 불러오는 명령어의 접두어</p>
        <p><span className="legend-required">[분홍색]</span>: 필수로 입력해야 하는 인자</p>
        <p><span className="legend-optional">(연두색)</span>: 생략 가능한 옵션 인자</p>
      </header>

      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} placeholder="명령어 검색..." />

      <CommandSection title="@욕설필터" searchQuery={searchQuery}>
        <p>사용법: <span className="legend-prefix">@욕설필터</span></p>
        <p>해당 채팅방의 욕설 감지 기능을 ON/OFF 합니다.</p>
        <img src="Images/misc_3.jpg" alt="기타 3" />
        <br />
        <img src="Images/misc_4.jpg" alt="기타 4" />
      </CommandSection>

      <CommandSection title="~ 라고하면 ~ 라고해" searchQuery={searchQuery}>
        <p>사용법: <span className="legend-required">[명령어]</span><span className="legend-prefix"> 라고하면 </span><span className="legend-required">[대답]</span><span className="legend-prefix"> 라고해</span></p>
        <p>설정한 명령어 지우기: <span className="legend-required">[명령어]</span><span className="legend-prefix"> 라고하지마</span></p>
        <p>직접 루시의 자동응답 기능을 설정할 수 있습니다.</p>
        <p><br />※명령어 사이의 띄어쓰기에 주의해주세요!</p>
        <p>※설정한 명령어는 채팅방별 분리 적용됩니다.</p>
        <img src="Images/misc_6.jpg" alt="기타 6" />
      </CommandSection>
    </article>
  )
}

export default Misc
