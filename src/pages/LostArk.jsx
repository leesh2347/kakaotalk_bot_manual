import CommandSection from '../components/CommandSection'

function LostArk() {
  return (
    <article>
      <header>
        <h1>로스트아크 관련 기능</h1>
        <p>루시의 기능 중 온라인 게임 '로스트아크' 관련 기능들입니다.</p>
        <p><br /><span className="legend-prefix">@하늘색</span>: 해당 기능을 불러오는 명령어의 접두어</p>
        <p><span className="legend-required">[분홍색]</span>: 필수로 입력해야 하는 인자</p>
        <p><span className="legend-optional">(연두색)</span>: 생략 가능한 옵션 인자</p>
      </header>

      <CommandSection title="@로아">
        <p>사용법: <span className="legend-prefix">@로아 </span><span className="legend-required">[닉네임]</span></p>
        <p>해당 로스트아크 캐릭터의 외형과 정보를 출력합니다.</p>
        <img src="Images/loa_1.jpg" alt="로아 1" />
        <p><br />※한 번 이상 검색 시, 닉네임을 생략하면 최근에 가장 많이 검색한 닉네임을 루시가 스스로 기억해서 불러옵니다.</p>
        <img src="Images/loa_2.jpg" alt="로아 2" />
      </CommandSection>

      <CommandSection title="@원정대">
        <p>사용법: <span className="legend-prefix">@원정대 </span><span className="legend-required">[닉네임]</span></p>
        <p>해당 로스트아크 캐릭터의 원정대 캐릭터 목록을 출력합니다.</p>
        <img src="Images/loa_3.jpg" alt="로아 3" />
        <p><br />※한 번 이상 검색 시, 닉네임을 생략하면 최근에 가장 많이 검색한 닉네임을 루시가 스스로 기억해서 불러옵니다.</p>
        <img src="Images/loa_4.jpg" alt="로아 4" />
      </CommandSection>

      <CommandSection title="@내실">
        <p>사용법: <span className="legend-prefix">@내실 </span><span className="legend-required">[닉네임]</span></p>
        <p>해당 로스트아크 캐릭터의 수집형 컨텐츠 (이하 내실) 현황을 출력합니다.</p>
        <img src="Images/loa_5.jpg" alt="로아 5" />
        <p><br />※한 번 이상 검색 시, 닉네임을 생략하면 최근에 가장 많이 검색한 닉네임을 루시가 스스로 기억해서 불러옵니다.</p>
        <img src="Images/loa_6.jpg" alt="로아 6" />
      </CommandSection>

      <CommandSection title="@각인">
        <p>사용법: <span className="legend-prefix">@각인 </span><span className="legend-required">[닉네임]</span></p>
        <p>해당 로스트아크 캐릭터의 장착 각인을 출력합니다.</p>
        <img src="Images/loa_7.jpg" alt="로아 7" />
        <p><br />※한 번 이상 검색 시, 닉네임을 생략하면 최근에 가장 많이 검색한 닉네임을 루시가 스스로 기억해서 불러옵니다.</p>
        <img src="Images/loa_8.jpg" alt="로아 8" />
      </CommandSection>

      <CommandSection title="@모험섬">
        <p>사용법: <span className="legend-prefix">@모험섬</span></p>
        <p>프로키온의 나침반의 오늘의 모험섬을 검색합니다.</p>
        <img src="Images/loa_9.jpg" alt="로아 9" />
      </CommandSection>

      <CommandSection title="@항협">
        <p>사용법: <span className="legend-prefix">@항협</span></p>
        <p>오늘의 항해 협동 시간표를 출력합니다.</p>
        <img src="Images/loa_10.jpg" alt="로아 10" />
      </CommandSection>

      <CommandSection title="@사사게">
        <p>사용법: <span className="legend-prefix">@사사게 </span><span className="legend-required">[닉네임]</span></p>
        <p>해당 로스트아크 닉네임을 인벤 사건사고 게시판에 검색합니다.</p>
        <p><br />※앞에서부터 최대 5 페이지까지만 검색하므로, 오래된 기록은 검색되지 않을 수 있습니다.</p>
        <img src="Images/loa_11.jpg" alt="로아 11" />
      </CommandSection>

      <CommandSection title="@경매">
        <p>사용법: <span className="legend-prefix">@경매 </span><span className="legend-required">[경매장시세]</span><span className="legend-optional"> (파티 인원)</span></p>
        <p>레이드 보상 경매의 입찰 효율을 계산합니다.</p>
        <img src="Images/loa_12.jpg" alt="로아 12" />
        <p><br />파티 인원을 생략 시, 기본 4 인으로 계산합니다.</p>
        <img src="Images/loa_13.jpg" alt="로아 13" />
      </CommandSection>
    </article>
  )
}

export default LostArk
