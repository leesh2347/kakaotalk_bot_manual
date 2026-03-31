import CommandSection from '../components/CommandSection'

function Maple() {
  return (
    <article>
      <header>
        <h1>메이플스토리 관련 기능</h1>
        <p>루시의 기능 중 온라인 게임 '메이플스토리' 관련 기능들입니다.</p>
        <p><br /><span className="legend-prefix">@하늘색</span>: 해당 기능을 불러오는 명령어의 접두어</p>
        <p><span className="legend-required">[분홍색]</span>: 필수로 입력해야 하는 인자</p>
        <p><span className="legend-optional">(연두색)</span>: 생략 가능한 옵션 인자</p>
      </header>

      <CommandSection title="@메이플">
        <p>사용법: <span className="legend-prefix">@메이플 </span><span className="legend-required">[닉네임]</span></p>
        <p>해당 메이플 캐릭터의 기본적인 정보를 출력합니다.</p>
        <img src="Images/maple_1_1.jpg" alt="메이플 1" />
        <br />
        <img src="Images/maple_1_53.jpg" alt="메이플 1" />
        <p><br />※한 번 이상 검색 시, 닉네임을 생략하면 최근에 가장 많이 검색한 닉네임을 루시가 스스로 기억해서 불러옵니다.</p>
        <img src="Images/maple_1_2.jpg" alt="메이플 2" />
      </CommandSection>

      <CommandSection title="@무릉">
        <p>사용법: <span className="legend-prefix">@무릉 </span><span className="legend-required">[닉네임]</span><span className="legend-optional"> (닉네임 2) (닉네임 3) ...</span></p>
        <p>해당 메이플 캐릭터의 무릉도장 기록을 검색합니다.</p>
        <p><br />※한 번 이상 검색 시, 닉네임을 생략하면 최근에 가장 많이 검색한 닉네임을 루시가 스스로 기억해서 불러옵니다.</p>
        <img src="Images/maple_1_3.jpg" alt="메이플 3" />
        <p><br />※닉네임을 6 인 이하 다수 입력 시, 다수의 무릉도장 기록을 한꺼번에 검색할 수 있습니다.<br />다중 검색은 닉네임 생략 시 기록에 반영되지 않습니다.</p>
        <img src="Images/maple_1_4.jpg" alt="메이플 4" />
      </CommandSection>

      <CommandSection title="@유니온">
        <p>사용법: <span className="legend-prefix">@유니온 </span><span className="legend-required">[닉네임]</span></p>
        <p>해당 메이플 캐릭터의 유니온 레벨과 전투력, 코인 수급량을 검색합니다.</p>
        <img src="Images/maple_1_5.jpg" alt="메이플 5" />
        <p><br />※한 번 이상 검색 시, 닉네임을 생략하면 최근에 가장 많이 검색한 닉네임을 루시가 스스로 기억해서 불러옵니다.</p>
        <img src="Images/maple_1_6.jpg" alt="메이플 6" />
      </CommandSection>

      <CommandSection title="@업적">
        <p>사용법: <span className="legend-prefix">@업적 </span><span className="legend-required">[닉네임]</span></p>
        <p>해당 메이플 캐릭터의 업적 점수를 검색합니다.</p>
        <img src="Images/maple_1_46.jpg" alt="메이플 5" />
        <p><br />※한 번 이상 검색 시, 닉네임을 생략하면 최근에 가장 많이 검색한 닉네임을 루시가 스스로 기억해서 불러옵니다.</p>
      </CommandSection>
	  
	  <CommandSection title="@코디">
        <p>사용법: <span className="legend-prefix">@코디 </span><span className="legend-required">[닉네임]</span></p>
        <p>해당 메이플 캐릭터의 코디 정보를 검색합니다.</p>
        <img src="Images/maple_1_14.jpg" alt="메이플 5" />
        <p><br />※한 번 이상 검색 시, 닉네임을 생략하면 최근에 가장 많이 검색한 닉네임을 루시가 스스로 기억해서 불러옵니다.</p>
		<img src="Images/maple_1_15.jpg" alt="메이플 5" />
      </CommandSection>


      <CommandSection title="@레벨">
        <p>사용법: <span className="legend-prefix">@레벨 </span><span className="legend-required">[닉네임]</span><span className="legend-optional"> (목표레벨)</span></p>
        <p>해당 메이플 캐릭터의 레벨, 경험치 정보와, 만렙까지의 경험치를 출력합니다.</p>
        <img src="Images/maple_1_7.jpg" alt="메이플 7" />
        <p><br />※한 번 이상 검색 시, 닉네임을 생략하면 최근에 가장 많이 검색한 닉네임을 루시가 스스로 기억해서 불러옵니다.</p>
        <img src="Images/maple_1_8.jpg" alt="메이플 8" />
        <p><br />※목표레벨을 같이 입력하면, 해당 레벨까지의 경험치량을 출력합니다.</p>
        <img src="Images/maple_1_9.jpg" alt="메이플 9" />
      </CommandSection>

      <CommandSection title="@히스토리">
        <p>사용법: <span className="legend-prefix">@히스토리 </span><span className="legend-required">[닉네임]</span></p>
        <p>해당 메이플 캐릭터의 경험치 히스토리를 출력합니다.</p>
        <img src="Images/maple_1_10.jpg" alt="메이플 10" />
        <p><br />※한 번 이상 검색 시, 닉네임을 생략하면 최근에 가장 많이 검색한 닉네임을 루시가 스스로 기억해서 불러옵니다.</p>
        <img src="Images/maple_1_11.jpg" alt="메이플 11" />
      </CommandSection>
	  
	  <CommandSection title="@레벨히스토리">
        <p>사용법: <span className="legend-prefix">@레벨히스토리 </span><span className="legend-required">[닉네임]</span></p>
        <p>해당 메이플 캐릭터의 레벨 히스토리를 출력합니다.</p>
		<p>넥슨 공식API에서 지원하지 않는 기능이므로 루시 자체 DB기반으로 구현한 기능이므로, 루시를 통해 검색한 기록을 기준으로 검색합니다.</p>
        <img src="Images/maple_1_16.jpg" alt="메이플 16" />
        <p><br />※한 번 이상 검색 시, 닉네임을 생략하면 최근에 가장 많이 검색한 닉네임을 루시가 스스로 기억해서 불러옵니다.</p>
        <img src="Images/maple_1_12.jpg" alt="메이플 12" />
      </CommandSection>

      <CommandSection title="@스탯">
        <p>사용법: <span className="legend-prefix">@스탯 </span><span className="legend-required">[닉네임]</span></p>
        <p>해당 메이플 캐릭터의 전투력 및 세부 스탯 정보들을 표시합니다.</p>
        <img src="Images/maple_1_40.jpg" alt="메이플 5" />
        <br />
        <img src="Images/maple_1_41.jpg" alt="메이플 6" />
        <p><br />※한 번 이상 검색 시, 닉네임을 생략하면 최근에 가장 많이 검색한 닉네임을 루시가 스스로 기억해서 불러옵니다.</p>
      </CommandSection>

      <CommandSection title="@메창">
        <p>사용법: <span className="legend-prefix">@메창 </span><span className="legend-required">[닉네임]</span></p>
        <p><br />해당 캐릭터의 각종 컨텐츠 기준을 통해 메창 점수를 측정합니다.</p>
        <p><br />측정 기준: 레벨, 유니온, 아티팩트, 전투력, 어센틱포스, HEXA 매트릭스, 유니온 챔피언, 해방 여부, 컴플리트 가챠 안드로이드 보유 여부, 자석펫 보유 여부</p>
        <img src="Images/maple_1_13.jpg" alt="메이플 13" />
        <p><br />※닉네임 없이 명령어만 입력 시, 사용법과 점수 기준, 측정 지표 설명을 출력합니다.</p>
        <img src="Images/maple_1_49.jpg" alt="메이플 12" />
        <br />
        <img src="Images/maple_1_50.jpg" alt="메이플 13" />
      </CommandSection>

      <CommandSection title="@헥사">
        <p>사용법: <span className="legend-prefix">@헥사 </span><span className="legend-required">[닉네임]</span></p>
        <p>해당 메이플 캐릭터의 6 차 스킬 강화 상태를 출력합니다.</p>
        <img src="Images/maple_1_32.jpg" alt="메이플 32" />
        <br />
        <img src="Images/maple_1_33.jpg" alt="메이플 33" />
        <p><br />※한 번 이상 검색 시, 닉네임을 생략하면 최근에 가장 많이 검색한 닉네임을 루시가 스스로 기억해서 불러옵니다.</p>
      </CommandSection>

      <CommandSection title="@보스">
        <p>사용법: <span className="legend-prefix">@보스 </span><span className="legend-required">[보스이름]</span></p>
        <p>해당 보스의 정보를 출력합니다.<br />보스 이름은 띄어쓰기 없이 난이도와 함께 써주세요! (예시: 카오스벨룸)</p>
        <img src="Images/maple_1_17.jpg" alt="메이플 17" />
      </CommandSection>

      <CommandSection title="@메스피">
        <p>사용법: <span className="legend-prefix">@메스피</span></p>
        <p>메소 주화 현재 시세를 출력합니다.</p>
        <p>시세는 매일 오전 10 시 10 분에 갱신됩니다.</p>
        <img src="Images/maple_1_51.jpg" alt="메이플 31" />
      </CommandSection>

      <CommandSection title="@썬데이">
        <p>사용법: <span className="legend-prefix">@썬데이</span></p>
        <p>썬데이 메이플을 출력합니다.</p>
        <p>썬데이는 금요일 10시경 이후 뜨므로, 그 이전에는 사용할 수 없습니다.</p>
        <img src="Images/maple_1_19.jpg" alt="메이플 31" />
      </CommandSection>
	  
	  <CommandSection title="@공지구독">
        <p>사용법: <span className="legend-prefix">@공지구독</span></p>
        <p>메이플스토리 공홈의 공지를 루시를 통해 구독할 수 있습니다.</p>
        <p>명령어를 한번 사용하면 그 방에서 구독이 시작되며, 다시 한 번 입력할 시 구독이 취소됩니다.</p>
        <img src="Images/maple_1_18.jpg" alt="메이플 31" />
      </CommandSection>
	  
	  <CommandSection title="@이벤트">
        <p>사용법: <span className="legend-prefix">@이벤트</span></p>
        <p>현재 진행중인 메이플스토리의 이벤트 목록을 볼 수 있습니다.</p>
        <img src="Images/maple_1_20.jpg" alt="메이플 31" />
      </CommandSection>

      <CommandSection title="@방무">
        <p>사용법: <span className="legend-prefix">@방무 </span><span className="legend-required">[보스방어율] [스텟창방무]</span><span className="legend-optional"> (코강방무) (스킬방무 1) (스킬방무 2) ...</span></p>
        <p>자신의 실 방무 스텟과, 해당 방어율의 보스에게 들어가는 딜량을 계산해줍니다.<br />※모든 인자는 퍼센트 (%) 를 빼고 입력해주세요!</p>
        <img src="Images/maple_1_23.jpg" alt="메이플 23" />
      </CommandSection>

      <CommandSection title="@재획, @소재획">
        <p>사용법: <span className="legend-prefix">@재획 </span><span className="legend-required">[닉네임] [시간당 마릿수 (만)]</span></p>
        <p><span className="legend-prefix">@소재획 </span><span className="legend-required">[닉네임] [시간당 마릿수 (만)]</span></p>
        <p>재획비 구매 효율을 계산해줍니다.<br /><br />※간당 마릿수는 만 마리 단위로 입력해주세요!<br />※다른 모든 도핑은 남아 있는 상태로 재획비만을 마시지 않은 상태로 접속을 종료해야 보다 정확한 측정이 가능합니다.</p>
        <img src="Images/maple_1_24.jpg" alt="메이플 24" />
        <p>@재획 의 경우 일반 재획비, @소재획 의 경우 소형 재획비를 기준으로 계산해줍니다.</p>
        <img src="Images/maple_1_54.jpg" alt="메이플 54" />
      </CommandSection>

      <CommandSection title="@초성비, @극성비, @태성비, ....">
        <p>사용법:</p>
        <p><span className="legend-prefix">@익성비 </span><span className="legend-required">[레벨]</span></p>
        <p><span className="legend-prefix">@성비 1 </span><span className="legend-required">[레벨]</span></p>
        <p><span className="legend-prefix">@성비 2 </span><span className="legend-required">[레벨]</span></p>
        <p><span className="legend-prefix">@성비 3 </span><span className="legend-required">[레벨]</span></p>
        <p><span className="legend-prefix">@태성비 </span><span className="legend-required">[레벨]</span></p>
        <p><span className="legend-prefix">@극성비 </span><span className="legend-required">[레벨]</span></p>
        <p><span className="legend-prefix">@초성비 </span><span className="legend-required">[레벨]</span></p>
		<p><span className="legend-prefix">@도성비 </span><span className="legend-required">[레벨]</span></p>
		<p><span className="legend-prefix">@전성비 </span><span className="legend-required">[레벨]</span></p>
        <p>극한 성장의 비약, 태풍 성장의 비약 등 각종 비약류의 경험치량을 출력합니다.</p>
        <img src="Images/maple_1_47.jpg" alt="메이플 25" />
        <br />
        <img src="Images/maple_1_25.jpg" alt="메이플 25" />
        <p>성비 1: 200~209 비약</p>
        <p>성비 2: 210~219 비약</p>
        <p>성비 3: 220~229 비약</p>
        <img src="Images/maple_1_34.jpg" alt="메이플 34" />
      </CommandSection>

      <CommandSection title="@하이마운틴, @앵글러, @악몽">
        <p>사용법: <span className="legend-prefix">@하이마운틴 </span><span className="legend-required">[레벨]</span></p>
		<p><span className="legend-prefix">@앵글러 </span><span className="legend-required">[레벨]</span></p>
		<p><span className="legend-prefix">@악몽선경 </span><span className="legend-required">[레벨]</span></p>
        <p>대체 명령어: <span className="legend-prefix">@높은산</span>, <span className="legend-prefix">@안녕산</span>, <span className="legend-prefix">@악몽</span></p>
        <p>하이마운틴 등 에픽던전의 경험치량과, 추가 메이플포인트 사용 시의 경험치량을 출력합니다.</p>
        <img src="Images/maple_1_52.jpg" alt="메이플 24" />
      </CommandSection>
	  
	  <CommandSection title="@익몬">
        <p>사용법: <span className="legend-prefix">@익몬 </span><span className="legend-required">[레벨]</span></p>
        <p>몬스터파크 익스트림 클리어 시의 경험치량을 출력합니다.</p>
        <img src="Images/maple_1_22.jpg" alt="메이플 24" />
      </CommandSection>
	  
	  <CommandSection title="@exp, @상급exp">
        <p>사용법: <span className="legend-prefix">@exp </span><span className="legend-required">[레벨] [갯수]</span></p>
		<p><span className="legend-prefix">@상급exp </span><span className="legend-required">[레벨] [갯수]</span></p>
        <p>EXP쿠폰 사용 시의 경험치량을 출력합니다.</p>
        <img src="Images/maple_1_55.jpg" alt="메이플 24" />
      </CommandSection>
	  
	  <CommandSection title="@익부">
        <p>사용법: <span className="legend-prefix">@익부 </span><span className="legend-required">[레벨] [마릿수]</span></p>
        <p>익스프레스 부스터 몬스터 사냥 시의 경험치량을 출력합니다.</p>
        <img src="Images/maple_1_56.jpg" alt="메이플 24" />
      </CommandSection>
	  
	  <CommandSection title="@메카딸기">
        <p>사용법: <span className="legend-prefix">@메카딸기 </span><span className="legend-required">[레벨]</span></p>
        <p>메카 딸기농장 클리어 시의 경험치량을 출력합니다.</p>
        <img src="Images/maple_1_57.jpg" alt="메이플 24" />
      </CommandSection>

      <CommandSection title="@추옵">
        <p>사용법: <span className="legend-prefix">@추옵 </span><span className="legend-required">[세트이름]</span><span className="legend-optional"> (무기이름)</span></p>
        <p>해당 무기의 1~5 등급별 공격력/마력 추옵을 검색합니다.</p>
        <img src="Images/maple_1_26.jpg" alt="메이플 26" />
        <p><br />무기 이름을 생략 시 해당 세트의 모든 무기별 추옵을 출력합니다.</p>
        <img src="Images/maple_1_29.jpg" alt="메이플 29" />
        <br />
        <img src="Images/maple_1_30.jpg" alt="메이플 30" />
        <p><br />아무 인자도 입력하지 않을 시 사용법을 출력합니다.</p>
        <img src="Images/maple_1_27.jpg" alt="메이플 27" />
        <br />
        <img src="Images/maple_1_28.jpg" alt="메이플 28" />
      </CommandSection>

      <CommandSection title="@어센틱">
        <p>사용법: <span className="legend-prefix">@어센틱 </span><span className="legend-required">[시작레벨]</span><span className="legend-required"> [끝레벨]</span></p>
        <p>시작 레벨~끝 레벨까지의 어센틱심볼을 계산해 줍니다.</p>
        <p>각 지역별 총 심볼세 양과, 총 일일퀘스트 날짜 수를 표시합니다.</p>
        <img src="Images/maple_1_36.jpg" alt="메이플 36" />
        <br />
        <img src="Images/maple_1_37.jpg" alt="메이플 37" />
      </CommandSection>

      <CommandSection title="@6차">
        <p>사용법:</p>
        <p><span className="legend-prefix">@6차 </span><span className="legend-required">[시작레벨]</span><span className="legend-required"> [끝레벨]</span></p>
        <p><span className="legend-prefix">@오리진 </span><span className="legend-required">[시작레벨]</span><span className="legend-required"> [끝레벨]</span></p>
        <p><span className="legend-prefix">@마스터리 </span><span className="legend-required">[시작레벨]</span><span className="legend-required"> [끝레벨]</span></p>
        <p><span className="legend-prefix">@강화 </span><span className="legend-required">[시작레벨]</span><span className="legend-required"> [끝레벨]</span></p>
        <p><span className="legend-prefix">@공용 </span><span className="legend-required">[시작레벨]</span><span className="legend-required"> [끝레벨]</span></p>
        <p>시작 레벨~끝 레벨까지의 솔 에르다 및 조각 수를 계산해 줍니다.</p>
        <p>오리진, 마스터리, 강화, 공용은 개별 검색 명령어이며 6 차 명령어 사용 시 3 가지를 한번에 출력합니다.</p>
        <p>코어가 없는 상태로 제작하는 것은 0 레벨로 취급합니다.</p>
        <img src="Images/maple_1_42.jpg" alt="메이플 36" />
        <br />
        <img src="Images/maple_1_43.jpg" alt="메이플 37" />
        <br />
        <img src="Images/maple_1_44.jpg" alt="메이플 37" />
        <br />
        <img src="Images/maple_1_45.jpg" alt="메이플 37" />
      </CommandSection>
	  
      <CommandSection title="@채널">
        <p>사용법: <span className="legend-prefix">@채널</span></p>
		<p><span className="legend-prefix">@챌널</span></p>
        <p>에픽빔이 잘 뜰 것 같은 채널 하나를 추천해 줍니다.<br />챌널은 챌린저스 서버, 채널은 스카니아 서버 기준입니다.</p>
        <img src="Images/maple_1_21.jpg" alt="메이플 18" />
      </CommandSection>
	  
	  <CommandSection title="@명당">
        <p>사용법: <span className="legend-prefix">@명당</span></p>
        <p>강화가 잘 되는 명당 하나를 추천해 줍니다.</p>
        <img src="Images/maple_1_48.jpg" alt="메이플 18" />
      </CommandSection>

      <CommandSection title="@녜힁">
        <p>사용법: <span className="legend-prefix">@녜힁 </span><span className="legend-required">[글자수]</span></p>
        <p>2~6 글자 사이의 녜힁 (뜻 없는 잡닉) 닉네임을 생성합니다.</p>
        <p>이와 동시에 해당 닉네임이 이미 존재하는지도 검색합니다.</p>
        <img src="Images/maple_1_31.jpg" alt="메이플 31" />
        <br />
        <img src="Images/maple_1_35.jpg" alt="메이플 35" />
      </CommandSection>
    </article>
  )
}

export default Maple
