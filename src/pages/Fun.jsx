import { useState } from 'react'
import CommandSection from '../components/CommandSection'
import SearchBar from '../components/SearchBar'

function Fun() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <article>
      <header>
        <h1>재미요소 기능</h1>
        <p>루시의 기능 중 재미요소를 위한 기능들입니다.</p>
        <p>※일부 방에서는 방장의 개발자에게 요청으로 인해 작동하지 않습니다. 도움말에 링크된 도배방을 이용해 주세요.</p>
        <p><br /><span className="legend-prefix">@하늘색</span>: 해당 기능을 불러오는 명령어의 접두어</p>
        <p><span className="legend-required">[분홍색]</span>: 필수로 입력해야 하는 인자</p>
        <p><span className="legend-optional">(연두색)</span>: 생략 가능한 옵션 인자</p>
      </header>

      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} placeholder="명령어 검색..." />

      <CommandSection title="@주사위" searchQuery={searchQuery}>
        <p>사용법: <span className="legend-prefix">@주사위</span></p>
        <p>1~100 랜덤 숫자 주사위를 굴립니다.</p>
        <img src="Images/fun_1.jpg" alt="재미 1" />
      </CommandSection>

      <CommandSection title="@오늘의운세" searchQuery={searchQuery}>
        <p>사용법: <span className="legend-prefix">@오늘의운세</span></p>
        <p>오늘의 운세를 봅니다. 하루 1 회씩만 가능합니다.</p>
        <img src="Images/fun_2.jpg" alt="재미 2" />
      </CommandSection>

      <CommandSection title="뭐먹지" searchQuery={searchQuery}>
        <p>사용법: <span className="legend-prefix">뭐먹지 </span><span className="legend-optional">(갯수)</span></p>
        <p>또는 <span className="legend-prefix">ㅁㅁㅈ </span><span className="legend-optional">(갯수)</span></p>
        <p>음식 메뉴를 추천해 줍니다.</p>
        <img src="Images/fun_3.jpg" alt="재미 3" />
        <p><br />뒤에 10 이하 갯수를 입력하면 갯수만큼 출력합니다.</p>
        <img src="Images/fun_4.jpg" alt="재미 4" />
      </CommandSection>

      <CommandSection title="@슬롯머신" searchQuery={searchQuery}>
        <p>사용법: <span className="legend-prefix">@슬롯머신</span></p>
        <p>3 칸 슬롯머신을 굴립니다.</p>
        <img src="Images/fun_5.jpg" alt="재미 5" />
      </CommandSection>

      <CommandSection title="나는..." searchQuery={searchQuery}>
        <p>사용법: <span className="legend-prefix">나는...</span></p>
        <p>루시님은 임포스터였습니다.</p>
        <img src="Images/fun_6.jpg" alt="재미 6" />
      </CommandSection>

      <CommandSection title="소라고동님" searchQuery={searchQuery}>
        <p>사용법: <span className="legend-prefix">소라고동님</span><span className="legend-optional"> (하고 싶은 말)</span></p>
        <p>마법의 소라고동에게 물어봅니다.</p>
        <img src="Images/fun_7.jpg" alt="재미 7" />
      </CommandSection>

      <CommandSection title="@ㄷㄱㄷㄱ" searchQuery={searchQuery}>
        <p>사용법: <span className="legend-prefix">@ㄷㄱㄷㄱ</span></p>
        <p>추억의 메이플 스텟 주사위</p>
        <img src="Images/fun_8.jpg" alt="재미 8" />
      </CommandSection>

      <CommandSection title="챔뽑기" searchQuery={searchQuery}>
        <p>사용법: <span className="legend-prefix">챔뽑기</span></p>
        <p>롤 챔피언 랜덤으로 1 개 뽑기</p>
        <img src="Images/fun_9.jpg" alt="재미 9" />
      </CommandSection>

      <CommandSection title="몰루가챠" searchQuery={searchQuery}>
        <p>사용법: <span className="legend-prefix">몰루가챠</span></p>
        <p>또는 <span className="legend-prefix">ㅁㄹㄱㅊ</span> 또는 <span className="legend-prefix">ㅁㄺㅊ</span></p>
        <p>블루 아카이브 3 성 가챠 시뮬레이터</p>
        <img src="Images/fun_21.jpg" alt="재미 21" />
      </CommandSection>

      <CommandSection title="원신가챠" searchQuery={searchQuery}>
        <p>사용법: <span className="legend-prefix">원신가챠</span></p>
        <p>또는 <span className="legend-prefix">ㅇㅅㄱㅊ</span></p>
        <p>원신 5 성 캐릭터 가챠 시뮬레이터</p>
        <img src="Images/fun_22.jpg" alt="재미 22" />
      </CommandSection>

      <CommandSection title="상자깡" searchQuery={searchQuery}>
        <p>사용법: <span className="legend-prefix">상자깡</span></p>
        <p>또는 <span className="legend-prefix">ㅅㅈㄲ</span></p>
        <p>메이플 더시드 1 급 상자 시뮬레이터</p>
        <img src="Images/fun_10.jpg" alt="재미 10" />
      </CommandSection>

      <CommandSection title="@로얄" searchQuery={searchQuery}>
        <p>사용법: <span className="legend-prefix">@로얄</span><span className="legend-optional"> (갯수)</span></p>
        <p>로얄목록 갱신: <span className="legend-prefix">@로얄업뎃</span></p>
        <p>메이플 로얄스타일 시뮬레이터. 갯수를 입력하지 않을 시 1 개를 뽑습니다.</p>
        <img src="Images/fun_11.jpg" alt="재미 11" />
        <br />
        <img src="Images/fun_12.jpg" alt="재미 12" />
        <p><br />갱신 명령어를 입력하면 로얄 목록을 최신으로 업데이트합니다.<br />메이플스토리 공홈 접속에 문제가 생길 시 작동하지 않을 수 있습니다.</p>
        <img src="Images/fun_13.jpg" alt="재미 13" />
      </CommandSection>

      <CommandSection title="@알훔치기 도움말" searchQuery={searchQuery}>
        <p>사용법: <span className="legend-prefix">@알훔치기 도움말</span></p>
        <p><span className="legend-prefix">@알훔치기</span></p>
        <p>프리토의 드래곤 알 훔치기 게임. 쉽게 말해 두 칸 찍기 게임입니다.</p>
        <img src="Images/fun_14.jpg" alt="재미 14" />
        <br />
        <img src="Images/fun_15.jpg" alt="재미 15" />
        <br />
        <img src="Images/fun_16.jpg" alt="재미 16" />
      </CommandSection>

      <CommandSection title="@타자게임" searchQuery={searchQuery}>
        <p>사용법: <span className="legend-prefix">@타자게임</span></p>
        <p>타자 속도 측정 게임.<br />복붙이 방지되어 있으며, 정답을 입력하지 않은 채로 2 분이 지나면 자동으로 종료됩니다.</p>
        <img src="Images/fun_17.jpg" alt="재미 17" />
      </CommandSection>

      <CommandSection title="@숫자야구도움말" searchQuery={searchQuery}>
        <p>사용법: <span className="legend-prefix">@숫자야구도움말</span></p>
        <p><span className="legend-prefix">@숫자야구시작</span></p>
        <p><span className="legend-prefix">@숫자야구 </span><span className="legend-required">(숫자 1) (숫자 2) (숫자 3)</span></p>
        <p>1~9 숫자야구 게임.</p>
        <img src="Images/fun_18.jpg" alt="재미 18" />
        <br />
        <img src="Images/fun_19.jpg" alt="재미 19" />
        <br />
        <img src="Images/fun_20.jpg" alt="재미 20" />
      </CommandSection>

      <CommandSection title="@룰렛 도움말" searchQuery={searchQuery}>
        <p>사용법: <span className="legend-prefix">@룰렛 도움말</span></p>
        <p><span className="legend-prefix">@룰렛 참가</span></p>
        <p><span className="legend-prefix">@룰렛 시작</span></p>
        <p>러시안 룰렛 게임.<br />처음으로 참가한 사람이 방장이 되며, 방장만이 게임 시작이 가능합니다.<br />게임 진행은 접두어 없이 '빵' 을 입력하여 진행합니다.</p>
        <img src="Images/fun_23.jpg" alt="재미 23" />
        <br />
        <img src="Images/fun_24.jpg" alt="재미 24" />
      </CommandSection>
    </article>
  )
}

export default Fun
