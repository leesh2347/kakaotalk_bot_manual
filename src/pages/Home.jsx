import { useState } from 'react'

function Home() {
  const [openSections, setOpenSections] = useState({})

  const toggleSection = (id) => {
    setOpenSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  const CollapsibleSection = ({ id, title, children }) => (
    <section>
      <h2>
        <a href={`#${id}`} onClick={(e) => { e.preventDefault(); toggleSection(id) }}>
          ▶ {title}
        </a>
      </h2>
      <div id={id} style={{ display: openSections[id] ? 'block' : 'none' }}>
        {children}
      </div>
    </section>
  )

  return (
    <article>
      <header>
        <h1>루시 Jr. 사용 설명서</h1>
        <p>카카오톡 봇 '루시 Jr.'의 명령어 모음과 사용법을 정리해 놓은 설명서입니다.</p>
      </header>
      <br />
      
      <CollapsibleSection id="divcon3" title="제작자 문의">
        <a href="https://open.kakao.com/o/sEEy7fze">
          <h3><span style={{ color: '#2E9AFE', fontSize: '25px' }}>제작자 오픈채팅 프로필</span></h3>
        </a>
        <p>● 봇을 체험해보고 싶으시거나, 채팅방에 봇을 영입하고 싶을 시 문의해 주세요.</p>
        <p>● 본 프로필은 'javascript','nodejs','카톡봇' 등의 태그로도 검색이 가능합니다.</p>
        <p>● 이 프로필은 봇 아닙니다! 여기로는 명령어 치지 말아주세요 ㅠㅠ</p>
      </CollapsibleSection>
      
      <br />
      
      <section>
        <h2>읽어주세요</h2>
        <p>● 기능 목록 확인은 '@도움말' 을 입력하면 볼 수 있습니다.</p>
		<p>● 신규 방 영입 시에는 총 인원 10명 이상인 오픈채팅방만 봇 영입 신청이 가능합니다.</p>
		<p>● 봇 영입 채팅방 수에는 제한이 없습니다. 단, 1개월 주기로 각 방 활성도를 체크하여 1개월 동안 누적 톡수 300개 미만으로 활성도가 떨어진 방은 봇 서비스가 종료됩니다.</p>
		<p>● 방장의 요청 하에 일부 방에서는 '재미요소' 카테고리의 기능들은 작동하지 않습니다. 도배방에 입장하여 사용하시면 됩니다.</p>
		<p>● 루시봇은 개인 기기를 서버로 사용하여 구동하고 있으므로 과부하 등 기기 사정에 따라 봇이 느려지거나 멈출 수 있습니다. 주인장이 바쁠 경우 문제 해결이 지연될 수 있습니다.</p>
		<p>● 봇이 며칠 동안 작동하지 않을 경우 주인에게 문의를 주시면 기기 재부팅을 시켜드립니다. 단, 가급적이면 며칠 이상 아예 동작하지 않을 때만 재부팅 요청을 부탁드립니다.</p>
		<p>● 봇 사용 중 버그 등 문제 발생 시 제작자에게 문의 주시면 됩니다. 가능한 볼 때마다 성실히 대답해 드리며, 버그도 최대한 고쳐드리겠습니다.</p>
		<p>● 추가를 원하는 기능이 있을 시 제작자에게 문의해 주세요.</p>
		<p>● 신기능 업데이트 및 자세한 개발 소식 등은 도배방에서 알려줍니다.</p>
		<p>● '사람같은 루시(BETA)' 기능의 경우 현재 BETA 단계이므로 정상적으로 작동하지 않는 경우가 많을 수 있습니다. 이 때문에 일부 방에서만 제한적으로 운영 중이며, 주인장에게 문의 시 사용중인 방에도 추가해드립니다.</p>
        
        <p>● <span style={{ color: '#FA5858' }}>봇을 내보낸 톡방은 이후 재영입을 해주지 않습니다. 신중해 주세요!</span></p>
        <p>● <span style={{ color: '#FE2EF7' }}>기존 방 캐시 청소 및 내보내기 방 확인 등의 이유로 가끔씩 봇 주인장이 채팅방 목록을 열람할 수 있습니다. 봇 영입는 이에 동의하는 것으로 간주하겠습니다.</span></p>
        <p>● <span style={{ color: '#FE2EF7' }}>카카오톡 특성상 봇도 유저로 취급되므로 루시 역시 선물하기에 당첨될 수 있습니다. 이 경우 봇 주인이 가져가며, 봇 영입는 이에 동의하는 것으로 간주하겠습니다.</span></p>
      </section>
      
      <br />
      
      <CollapsibleSection id="divcon" title="범례">
        <p>
          <span className="legend-prefix">@하늘색</span>: 해당 기능을 불러오는 명령어의 접두어
        </p>
        <p>
          <span className="legend-required">[분홍색]</span>: 필수로 입력해야 하는 인자
        </p>
        <p>
          <span className="legend-optional">(연두색)</span>: 생략 가능한 옵션 인자
        </p>
        <p><br />※ 대부분의 명령어의 접두어는 <span className="legend-prefix">@</span>, <span className="legend-prefix">!</span> 둘 다 작동합니다.<br />원활한 사용을 위해 추후 하나로 통합 예정입니다.</p>
      </CollapsibleSection>
      
      <CollapsibleSection id="divcon2" title="기타">
		<a href="https://github.com/leesh2347">
          <h3><span style={{ color: '#2E9AFE', fontSize: '25px' }}>제작자 깃허브 링크</span></h3>
        </a>
        <p>● 루시의 대부분의 기능의 소스는 깃허브를 통해 공개되어 있으나, 기존 오픈소스를 사용한 일부 기능은 업로드하지 않습니다.</p>
        <p>● 일부 소스 참고에 도움을 주신 Lune, CG 아렌, 전쿠 님께 감사드립니다.</p>
        <p><br />● 개발자 후원하기: <span style={{ color: '#2E9AFE' }}>농협 3010298635411</span></p>
      </CollapsibleSection>
    </article>
  )
}

export default Home
