import CommandSection from '../components/CommandSection'

function MapleLlm() {
  return (
    <article>
      <header>
        <h1>사람같은 루시 (BETA)</h1>
        <p>루시를 명령어 입력 없이 자연어 질문을 통해 사용할 수 있는 기능입니다.</p>
        <p>현재는 메이플스토리 관련 기능만을 지원합니다.</p>
        <p>자연어 처리에 사용되는 인공지능 모델은 Gemini 2.5 Flash 입니다.</p>
      </header>

      <section>
        <h2>범례</h2>
        <p>모든 기능 사용의 접두어는 <span className="legend-prefix">'루시 '</span> 입니다.</p>
        <p><span className="legend-required">[판단 기준]</span>: AI 가 해당 기능 요청으로 판단하는 기준</p>
        <p><span className="legend-optional">[예시]</span>: '판단 기준' 을 기준으로 해당 기능을 요청하는 자연어 질문 예시</p>
      </section>

      <CommandSection title="@메이플">
        <p><span className="legend-required">[판단 기준]</span>: 사용자의 질문이 특정 이름 또는 닉네임의 캐릭터에 대한 단순한 정보 요청</p>
        <p><span className="legend-optional">[예시]</span>: 루시 디벨로이드 캐릭터 정보 검색해줘</p>
		<img src="Images/llm_1.jpg" alt="llm 1" />
      </CommandSection>

      <CommandSection title="@무릉">
        <p><span className="legend-required">[판단 기준]</span>: 사용자의 질문이 특정 이름 또는 닉네임의 캐릭터에 대한 '무릉' 관련 정보 요청</p>
        <p><span className="legend-optional">[예시]</span>: 루시 디벨로이드 캐릭터 무릉 층수 검색해줘</p>
		<img src="Images/maple_1_1.jpg" alt="llm 2" />
      </CommandSection>

      <CommandSection title="@유니온">
        <p><span className="legend-required">[판단 기준]</span>: 사용자의 질문이 특정 이름 또는 닉네임의 캐릭터에 대한 '유니온' 관련 정보 요청</p>
        <p><span className="legend-optional">[예시]</span>: 루시 디벨로이드 캐릭터 유니온 검색해줘</p>
		<img src="Images/llm_2.jpg" alt="llm 3" />
      </CommandSection>

      <CommandSection title="@업적">
        <p><span className="legend-required">[판단 기준]</span>: 사용자의 질문이 특정 이름 또는 닉네임의 캐릭터에 대한 '업적' 관련 정보 요청</p>
        <p><span className="legend-optional">[예시]</span>: 루시 디벨로이드 캐릭터 업적 검색해줘</p>
		<img src="Images/maple_1_1.jpg" alt="llm 4" />
      </CommandSection>

      <CommandSection title="@아티팩트">
        <p><span className="legend-required">[판단 기준]</span>: 사용자의 질문이 특정 이름 또는 닉네임의 캐릭터에 대한 '아티팩트' 관련 정보 요청</p>
        <p><span className="legend-optional">[예시]</span>: 루시 디벨로이드 캐릭터 아티팩트 검색해줘</p>
		<img src="Images/llm_3.jpg" alt="llm 5" />
      </CommandSection>

      <CommandSection title="@스탯">
        <p><span className="legend-required">[판단 기준]</span>: 사용자의 질문이 특정 이름 또는 닉네임의 캐릭터에 대한 '스탯' 관련 정보 요청</p>
        <p><span className="legend-optional">[예시]</span>: 루시 디벨로이드 캐릭터 스탯 검색해줘</p>
		<img src="Images/llm_4.jpg" alt="llm 6" />
      </CommandSection>

      <CommandSection title="@헥사">
        <p><span className="legend-required">[판단 기준]</span>: 사용자의 질문이 특정 이름 또는 닉네임의 캐릭터에 대한 '6 차 강화' 관련 정보 요청</p>
        <p><span className="legend-optional">[예시]</span>: 루시 디벨로이드 캐릭터 6 차 강화 얼마나 되어 있어?</p>
		<img src="Images/llm_5.jpg" alt="llm 7" />
      </CommandSection>

      <CommandSection title="@메창">
        <p><span className="legend-required">[판단 기준]</span>: 사용자의 질문이 특정 이름 또는 닉네임의 캐릭터가 '얼마나 메창인지'에 대한 정보 요청</p>
        <p><span className="legend-optional">[예시]</span>: 루시 디벨로이드 캐릭터 메창이야?</p>
		<img src="Images/llm_6.jpg" alt="llm 8" />
      </CommandSection>

      <CommandSection title="@레벨, @히스토리">
        <p><span className="legend-required">[판단 기준]</span>:</p>
        <p>1. 사용자의 질문이 특정 이름 또는 닉네임의 캐릭터의 '경험치' 관련 정보 요청</p>
        <p>1.1. 사용자가 단일 날짜의 절대적 날짜 (예시: 6 월 1 일) 또는 상대적 날짜 (예시: 오늘, 어제) 의 정보 요청할 경우: @레벨 기능 처리</p>
        <p>1.2. 사용자가 2 일 이상 다수 날짜의 절대적 날짜 또는 상대적 날짜의 정보 요청할 경우: @히스토리 기능 처리</p>
        <p>1.3. 사용자의 질문에 날짜 언급이 없을 경우: 오늘 날짜 기준 @레벨 기능 처리</p>
        <p><span className="legend-optional">[예시]</span>:</p>
        <p>루시 디벨로이드 캐릭터 경험치 검색해줘</p>
        <p>루시 디벨로이드 캐릭터 6 월 1 일 경험치 검색해줘</p>
        <p>루시 디벨로이드 캐릭터 어제 경험치 검색해줘</p>
        <p>루시 디벨로이드 캐릭터 6 월 1 일부터 5 일까지 경험치 검색해줘</p>
        <p>루시 디벨로이드 캐릭터 지난주 월요일부터 금요일까지 경험치 검색해줘</p>
		<img src="Images/llm_7.jpg" alt="메이플 9" />
		<img src="Images/llm_8.jpg" alt="메이플 10" />
      </CommandSection>

      <CommandSection title="@6 차">
        <p><span className="legend-required">[판단 기준]</span>: 사용자의 질문이 특정 이름 또는 닉네임의 캐릭터에 대한 정보를 요청하는 것이 아니면서, 단순히 '6 차 강화' 에 대한 정보를 요청</p>
        <p>시작 레벨과 끝 레벨 중 사용자의 질문에서 생략된 값이 있을 경우 각각 최소값과 최대값을 기본값으로 함</p>
        <p><span className="legend-optional">[예시]</span>:</p>
        <p>루시 6 차 강화 1 레벨부터 10 레벨까지 얼마나 들어?</p>
        <p>루시 6 차 강화 10 레벨까지 얼마나 들어?</p>
        <p>루시 6 차 강화 5 레벨부터 얼마나 들어?</p>
		<img src="Images/llm_9.jpg" alt="llm 11" />
      </CommandSection>

      <CommandSection title="@어센틱">
        <p><span className="legend-required">[판단 기준]</span>: 사용자의 질문이 어센틱심볼 레벨업 비용에 대한 정보를 요청</p>
        <p>시작 레벨과 끝 레벨 중 사용자의 질문에서 생략된 값이 있을 경우 각각 최소값과 최대값을 기본값으로 함</p>
        <p><span className="legend-optional">[예시]</span>:</p>
        <p>루시 심볼 1 레벨부터 10 레벨까지 얼마나 들어?</p>
        <p>루시 심볼 10 레벨까지 얼마나 들어?</p>
        <p>루시 심볼 5 레벨부터 얼마나 들어?</p>
		<img src="Images/llm_10.jpg" alt="llm 12" />
      </CommandSection>

      <CommandSection title="단축어">
        <p>메이플스토리 유저들 사이에서 통용되는 일부 단축어들도 인식합니다.</p>
        <p>단, 학습이 되어 있지 않은 단축어는 인식하지 못할 수도 있습니다.</p>
        <p><br />현재 학습된 단축어 목록</p>
        <p>경치, 렙, 캐릭, 닉, 유뇬, 렙업, 섭, 멮, 메이플, 헤비하다, 라이트하다, 메린이이다, 메린이다, 뉴비이다, 6 차, 헥사 강화, 오리진 강화, 어센트 강화, 마스터리 강화, 야누스 강화, 마코, 어센틱, 심볼세, 세금, 스펙, 전투력, 스탯</p>
      </CommandSection>
    </article>
  )
}

export default MapleLlm
