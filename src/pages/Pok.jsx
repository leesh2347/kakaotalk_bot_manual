import { useState } from 'react'
import CommandSection from '../components/CommandSection'
import SearchBar from '../components/SearchBar'

function Pok() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <article>
      <header>
        <h1>포켓몬 게임</h1>
        <p>카톡봇을 통해 구현한 포켓몬 게임입니다.</p>
        <a href="https://open.kakao.com/o/sEEy7fze">
          <h3><span style={{ color: '#2E9AFE', fontSize: '25px' }}><del>게임 운영중인 채팅방 링크</del></span></h3>
        </a>
        <p><del>● 도배가 워낙 심한 기능이라 따로 채팅방을 파서 이 곳에서만 구동되게 해놨습니다.</del></p>
        <p><span style={{ color: '#FE2EF7' }}>카카오링크 (사진 출력) 기능의 서비스 종료로 인해 수정이 필요하여 해당 게임의 운영은 잠정중단합니다. 양해 부탁드립니다.</span></p>

        <p><br /><span className="legend-prefix">@하늘색</span>: 해당 기능을 불러오는 명령어의 접두어</p>
        <p><span className="legend-required">[분홍색]</span>: 필수로 입력해야 하는 인자</p>
        <p><span className="legend-optional">(연두색)</span>: 생략 가능한 옵션 인자</p>
      </header>

      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} placeholder="명령어 검색..." />

      <CommandSection title="가입과 탈퇴" searchQuery={searchQuery}>
        <p>가입: <span className="legend-prefix">@포켓몬 가입</span></p>
        <p>탈퇴: <span className="legend-prefix">@포켓몬 탈퇴</span></p>
        <p>자신의 채팅방 닉네임을 통해 가입합니다.</p>
        <p><br />※닉네임에 슬래시 (/) 가 들어가면 가입할 수 없습니다.</p>
        <img src="Images/pok_1_1.jpg" alt="포켓몬 1" />
        <img src="Images/pok_1_2.jpg" alt="포켓몬 2" />
      </CommandSection>

      <CommandSection title="탐험과 포켓몬 출현" searchQuery={searchQuery}>
        <p>탐험 시작: <span className="legend-prefix">@야생</span> 또는 <span className="legend-prefix">ㅇㅅ</span></p>
        <p>볼 던지기: <span className="legend-prefix">@볼</span> 또는 <span className="legend-prefix">ㅂ</span></p>
        <p>휴식: <span className="legend-prefix">@휴식</span></p>
        <p>탐험 시작 시, 잠시의 캐스팅 시간 후 확률에 따라 포켓몬이 나타납니다.</p>
        <p><br />포켓몬이 나타나면 볼을 던져 포획할 수 있습니다.</p>
        <img src="Images/pok_1.jpg" alt="포켓몬 3" />
        <p><br />탐험 중 확률에 따라 포켓몬 대신 아이템을 발견하기도 하며, 이 경우 포켓몬 출현 시까지 탐험이 계속 진행됩니다.</p>
        <img src="Images/pok_2.jpg" alt="포켓몬 4" />
        <p><br />아이템 중에는 낮은 확률로 포켓몬의 알이 출현하며, 일반 알은 레어 등급 이상, 전설 알은 전설 이상 포켓몬 확정권입니다.</p>
        <img src="Images/pok_3.jpg" alt="포켓몬 5" />
        <br />
        <img src="Images/pok_3_2.jpg" alt="포켓몬 6" />
        <p><br />아이템 중에는 매우 낮은 확률로 대량의 돈을 획득하는 특별한 아이템이 등장하기도 합니다.</p>
        <img src="Images/pok_4.jpg" alt="포켓몬 7" />
        <br />
        <img src="Images/pok_5.jpg" alt="포켓몬 8" />
        <p><br />탐험은 1 회 당 체력 1 을 소모하며, 자신의 스텟에 따라 체력을 모두 소진하면 탐험이 불가능해집니다.</p>
        <p>휴식을 통해 체력 회복이 가능하며, 휴식 명령어를 사용 시 휴식 시작, 다시 사용 시 휴식을 종료하게 됩니다.</p>
        <img src="Images/pok_11.jpg" alt="포켓몬 14" />
        <br />
        <img src="Images/pok_12.jpg" alt="포켓몬 15" />
      </CommandSection>

      <CommandSection title="포켓몬 출현과 포획" searchQuery={searchQuery}>
        <p>탐험 시작: <span className="legend-prefix">@야생</span> 또는 <span className="legend-prefix">ㅇㅅ</span></p>
        <p>볼 던지기: <span className="legend-prefix">@볼</span> 또는 <span className="legend-prefix">ㅂ</span></p>
        <p>도망치기: <span className="legend-prefix">@도망</span> 또는 <span className="legend-prefix">ㄷㅁ</span></p>
        <p>볼 구매: <span className="legend-prefix">@볼구매</span><span className="legend-required"> (50 개 이하 갯수)</span></p>
        <p>포켓몬은 탐험을 통해 발견 및 포획이 가능합니다.</p>
        <img src="Images/pok_1.jpg" alt="포켓몬 3" />
        <p><br />전설의 포켓몬이나 울트라비스트는 스텟에 따라 낮은 확률로 출현합니다.</p>
        <p>전설 및 울트라비스트 포켓몬은 일반적인 포켓몬보다 포획하기 어렵습니다.</p>
        <img src="Images/pok_6.jpg" alt="포켓몬 9" />
        <br />
        <img src="Images/pok_7.jpg" alt="포켓몬 10" />
        <p><br />매우 희박한 확률로 숨겨진 포켓몬이 출현하기도 하며, 숨겨진 포켓몬은 자신의 스텟과 관계없이 고정 출현률 및 포획률을 가집니다.</p>
        <img src="Images/pok_8.jpg" alt="포켓몬 11" />
        <p><br />포획률에 따라 포켓몬이 잡히지 않기도 하며, 포획 실패 시 일정 확률로 포켓몬은 도망쳐버립니다.</p>
        <img src="Images/pok_9.jpg" alt="포켓몬 12" />
        <p><br />볼을 모두 소진하여 던질 수 없게 되어도 포획에 실패하므로, 볼이 부족해지면 구매해서 채워야 합니다.</p>
        <p>볼은 한 번에 최대 50 개까지 소지할 수 있습니다.</p>
        <img src="Images/pok_10.jpg" alt="포켓몬 13" />
      </CommandSection>

      <CommandSection title="플레이 정보 확인" searchQuery={searchQuery}>
        <p>트레이너 정보 보기: <span className="legend-prefix">@트레이너정보</span><span className="legend-optional"> (채팅방에서의 이름)</span></p>
        <p>포켓몬 보관함 보기: <span className="legend-prefix">@내 포켓몬</span></p>
        <p>보관함 비우기 (돈 획득): <span className="legend-prefix">@놓아주기</span></p>
        <p>덱으로 포켓몬 이동: <span className="legend-prefix">@덱</span><span className="legend-required"> (보관함 번호)</span></p>
        <p>덱에서 보관함으로 포켓몬 이동: <span className="legend-prefix">@박스</span><span className="legend-required"> (덱 번호)</span></p>
        <p>덱 순서변경: <span className="legend-prefix">@순서변경</span><span className="legend-required"> (덱 번호 1) (덱 번호 2)</span></p>
        <p>보관함 포켓몬 잠금: <span className="legend-prefix">@잠금</span><span className="legend-required"> (보관함 번호)</span></p>
        <p>보관함 포켓몬 잠금해제: <span className="legend-prefix">@잠금해제</span><span className="legend-required"> (보관함 번호)</span></p>
        <p><br />트레이너 정보를 통해 포켓몬 출현률, 포획률, 플레이 전적 등등 다양한 스텟을 확인할 수 있습니다.</p>
        <img src="Images/pok_13.jpg" alt="포켓몬 16" />
        <br />
        <img src="Images/pok_14.jpg" alt="포켓몬 17" />
        <p><br />이름을 생략할 시 자신의 정보를 표시하지만, 뒤에 다른 유저의 닉네임을 입력하면 다른 유저의 정보를 확인할 수 있습니다.</p>
        <img src="Images/pok_15.jpg" alt="포켓몬 18" />
        <p><br />탐험 등으로 획득한 포켓몬은 보관함에서 확인이 가능합니다.</p>
        <p>덱과 박스 이동, 육성 등의 포켓몬 조작은 보관함에 표시된 것과 같이 각 포켓몬 옆의 순서번호를 이용해 구별하게 됩니다.</p>
        <img src="Images/pok_16.jpg" alt="포켓몬 19" />
        <br />
        <img src="Images/pok_17.jpg" alt="포켓몬 20" />
        <p><br />놓아주기를 사용할 시 보관함에서 잠금한 포켓몬을 제외한 모든 포켓몬을 놓아주고, 금액을 획득하게 됩니다.</p>
        <p>덱으로 이동한 포켓몬들은 잠금 여부와 관계없이 놓아주기에서 제외됩니다.</p>
        <img src="Images/pok_19.jpg" alt="포켓몬 22" />
      </CommandSection>

      <CommandSection title="포켓몬 육성" searchQuery={searchQuery}>
        <p>포켓몬 보관함 보기: <span className="legend-prefix">@내 포켓몬</span></p>
        <p>포켓몬 정보 보기 (덱): <span className="legend-prefix">@덱정보</span><span className="legend-required"> (덱 번호)</span></p>
        <p>포켓몬 정보 보기 (보관함): <span className="legend-prefix">@포켓몬정보</span><span className="legend-required"> (보관함 번호)</span></p>
        <p>포켓몬 레벨업 (덱): <span className="legend-prefix">@레벨업</span><span className="legend-required"> (보관함 번호)</span><span className="legend-optional"> (한번에 레벨업할 수)</span></p>
        <p>포켓몬 레벨업 (보관함): <span className="legend-prefix">@박스레벨업</span><span className="legend-required"> (보관함 번호)</span><span className="legend-optional"> (한번에 레벨업할 수)</span></p>
        <p>포켓몬 스킬뽑기 (덱 장착 필요): <span className="legend-prefix">@스킬뽑기</span><span className="legend-required"> (덱 번호)</span></p>
        <p>포켓몬 스킬 잠금 (덱 장착 필요): <span className="legend-prefix">@스킬잠금</span><span className="legend-required"> (덱 번호) (스킬 번호)</span></p>
        <p>포켓몬 폼체인지 (덱 장착 필요): <span className="legend-prefix">@폼체인지</span><span className="legend-required"> (덱 번호)</span></p>
        <p>포켓몬 메가진화 (덱 장착 필요): <span className="legend-prefix">@메가진화</span><span className="legend-required"> (덱 번호)</span></p>
        <p>포켓몬 노력치 업그레이드 (덱 장착 필요, 박스의 재료 포켓몬 필요): <span className="legend-prefix">@노력치강화</span><span className="legend-required"> (덱 번호) (박스 번호)</span></p>
        <p><br />포켓몬 정보를 통해 모습과 타입, 스텟, 보유 기술 등을 확인할 수 있습니다.</p>
        <img src="Images/pok_18.jpg" alt="포켓몬 23" />
        <p><br />포켓몬 레벨업은 금액 지불을 통해 강화 형식으로 하게 되며, 레벨업 수를 생략 시 1 레벨을 올립니다.</p>
        <p>모든 포켓몬의 진화는 레벨업을 통해 달성되며, 이브이처럼 진화체가 여럿일 경우 랜덤 1 가지로 진화하게 됩니다.</p>
        <img src="Images/pok_20.jpg" alt="포켓몬 24" />
        <p><br />포켓몬 기술은 금액 지불을 통해 랜덤으로 변경이 가능하며, 원하는 기술이 등장할 시 해당 기술을 잠근 상태로 변경이 가능합니다.</p>
        <p>단, 기술을 잠근 갯수에 따라 변경 금액이 증가하게 됩니다.</p>
        <img src="Images/pok_21.jpg" alt="포켓몬 25" />
        <br />
        <img src="Images/pok_22.jpg" alt="포켓몬 26" />
        <br />
        <img src="Images/pok_23.jpg" alt="포켓몬 27" />
        <p><br />일부 폼체인지 가능 포켓몬은 금액 지불을 통해 폼체인지가 가능합니다.</p>
        <p>원작에서의 합체식 포켓몬도 폼체인지로 구현되어 있으며, 이러한 포켓몬은 특정 포켓몬 보유를 요구합니다.</p>
        <img src="Images/pok_24.jpg" alt="포켓몬 28" />
        <p><br />일부 메가진화 가능 포켓몬은 고정 비용 20 억 지불을 통해 메가진화가 가능합니다.</p>
        <p>원작에서의 원시회귀 및 울트라네크로즈마 역시 메가진화로 구현되어 있으며, 메가진화가 X,Y 둘로 존재하는 포켓몬은 랜덤 1 가지로 메가진화하게 됩니다.</p>
        <p>※메가진화는 레벨 200 이상부터 가능하며, 덱에 1 마리만 장착 가능합니다.</p>
        <img src="Images/pok_25.jpg" alt="포켓몬 29" />
        <p><br />※메가진화 및 폼체인지가 불가능한 포켓몬을 선택 시 가능한 포켓몬 목록을 출력합니다.</p>
        <img src="Images/pok_26.jpg" alt="포켓몬 30" />
        <p><br />포켓몬의 노력치는 동일한 포켓몬을 포획한 후 재료로 사용하며 비용을 지불하여 업그레이드가 가능합니다.</p>
        <p>업그레이드 대상 포켓몬은 덱에 장착한 상태, 재료로 사용할 포켓몬은 박스에 있는 상태로 잠금이 해제된 상태여야 합니다.</p>
        <img src="Images/pok_52.jpg" alt="포켓몬 54" />
        <img src="Images/pok_53.jpg" alt="포켓몬 55" />
        <p><br />노력치는 1 회당 1V 씩, 최대 6V 까지 업그레이드가 가능하며, 동일한 레벨의 포켓몬이라도 큰 성능 차이를 보이게 됩니다.</p>
        <p>전설의 포켓몬이나 울트라비스트의 경우 일반 포켓몬에 비해 업그레이드 비용이 훨씬 높습니다.</p>
        <img src="Images/pok_54.jpg" alt="포켓몬 56" />
        <img src="Images/pok_55.jpg" alt="포켓몬 57" />
      </CommandSection>

      <CommandSection title="등급업" searchQuery={searchQuery}>
        <p>볼 업그레이드: <span className="legend-prefix">@볼강화</span></p>
        <p>볼 업그레이드 종류: <span className="legend-prefix">@볼종류</span></p>
        <p>트레이너 등급 종류: <span className="legend-prefix">@트레이너등급</span></p>
        <p><br />트레이너 등급은 일정량의 포켓몬 포획 수 달성 시 자동으로 상승합니다.</p>
        <img src="Images/pok_27.jpg" alt="포켓몬 31" />
        <p><br />트레이너 등급 상승을 통해 포획률 상승, 최대 체력 증가, 탐험 대기시간 단축 등의 혜택을 얻을 수 있습니다.</p>
        <p><br />등급 종류 명령어를 통해 트레이너 등급 목록과 목록별 혜택을 확인할 수 있습니다.</p>
        <img src="Images/pok_31.jpg" alt="포켓몬 32" />
        <br />
        <img src="Images/pok_32.jpg" alt="포켓몬 33" />
        <p><br />볼 업그레이드는 일정량의 포켓몬 조우 수 달성 시, 업그레이드 비용을 지불하고 업그레이드가 가능합니다.</p>
        <img src="Images/pok_28.jpg" alt="포켓몬 34" />
        <p><br />볼 업그레이드를 통해 희귀한 포켓몬의 출현률과 포획률 상승, 야생 포켓몬 기본 레벨 상승 등의 혜택을 얻을 수 있지만, 볼 구매 시의 비용 역시 증가하게 됩니다.</p>
        <p><br />볼 종류 명령어를 통해 볼 업그레이드 목록과 목록별 혜택을 확인할 수 있습니다.</p>
        <img src="Images/pok_29.jpg" alt="포켓몬 35" />
        <br />
        <img src="Images/pok_30.jpg" alt="포켓몬 36" />
      </CommandSection>

      <CommandSection title="포켓몬 배틀" searchQuery={searchQuery}>
        <p>PVP 배틀 참가: <span className="legend-prefix">@배틀참가</span></p>
        <p>(2 인 참가 시 매칭되어 배틀 진행)</p>
        <p>배틀 참가 후 매칭 취소: <span className="legend-prefix">@배틀취소</span></p>
        <p>배틀에서 포켓몬이 쓰러질 시: <span className="legend-prefix">@다음</span><span className="legend-required"> (덱 번호)</span> 를 통해 다음 포켓몬 내보내기</p>
        <p>배틀 기권: <span className="legend-prefix">@배틀기권</span></p>
        <p><br />두 명의 유저가 배틀에 참가하게 되면, 매칭이 성사되어 포켓몬 배틀이 진행되게 됩니다.</p>
        <img src="Images/pok_33.jpg" alt="포켓몬 37" />
        <p><br />승리한 유저는 패배한 유저의 보유 금액의 10% 를 상금으로 가져오게 됩니다.</p>
        <img src="Images/pok_34.jpg" alt="포켓몬 38" />
        <p><br />배틀에서 아군 포켓몬이 쓰러질 시, 다음 포켓몬을 내보낼 수 있습니다.</p>
        <img src="Images/pok_35.jpg" alt="포켓몬 39" />
        <p><br />배틀은 도배 완화를 위해 전체보기로 요약되어 표시되며, 매 턴마다 양측 포켓몬이 랜덤으로 보유 기술 1 개를 사용합니다.</p>
        <img src="Images/pok_36.jpg" alt="포켓몬 53" />
      </CommandSection>

      <CommandSection title="레이드 컨텐츠 (배틀)" searchQuery={searchQuery}>
        <p>체육관 도전: <span className="legend-prefix">@체육관</span></p>
        <p>배틀타워 (일일컨텐츠): <span className="legend-prefix">@배틀타워</span></p>
        <p><br />체육관과 뱃지는 타입별 1 개씩 총 18 개이며, 체육관 도전은 체력을 5 소모합니다.</p>
        <p>체육관 도전 시 현재 획득한 뱃지의 다음 체육관에 도전하게 됩니다.</p>
        <img src="Images/pok_49.jpg" alt="포켓몬 40" />
        <p><br />체육관 등 레이드 컨텐츠에서의 상대 포켓몬 처치 시, 상대가 포켓몬을 즉시 내보내며 계속 배틀이 이어지게 됩니다.</p>
        <img src="Images/pok_50.jpg" alt="포켓몬 41" />
        <p><br />체육관에서 승리 시, 일정량의 상금과 함께 뱃지를 획득합니다.</p>
        <img src="Images/pok_51.jpg" alt="포켓몬 42" />
        <p><br />배틀타워는 일일 레이드 컨텐츠로, 리로드 1 회당 1 회씩만 클리어 가능합니다.</p>
        <p>배틀타워 도전 시 자신의 선두 포켓몬 레벨에 맞춰 랜덤의 상대 트레이너가 매칭됩니다.</p>
        <img src="Images/pok_37.jpg" alt="포켓몬 43" />
        <p><br />배틀타워에서 승리 시, 대량의 상금을 획득하게 됩니다.</p>
        <img src="Images/pok_38.jpg" alt="포켓몬 44" />
      </CommandSection>

      <CommandSection title="챔피언리그" searchQuery={searchQuery}>
        <p>챔피언리그 도전: <span className="legend-prefix">@챔피언도전</span></p>
        <p><br />챔피언리그 도전은 모든 뱃지를 획득해야 가능하며, 체력을 5 소모합니다.</p>
        <p>챔피언리그는 리로드 1 회당 1 회씩만 클리어 가능합니다.</p>
        <p>챔피언의 포켓몬의 레벨은 최대 강화 레벨+10 고정입니다.</p>
        <img src="Images/pok_39.jpg" alt="포켓몬 43" />
        <p><br />체육관, 챔피언리그 등 레이드 컨텐츠에서의 상대 포켓몬 처치 시, 상대가 포켓몬을 즉시 내보내며 계속 배틀이 이어지게 됩니다.</p>
        <img src="Images/pok_40.jpg" alt="포켓몬 44" />
        <p><br />챔피언리그에서 승리 시, 자신의 덱이 전당등록이 되며, 챔피언 전용 등급인 '챔피언' 으로 상승합니다.</p>
        <p>기존 챔피언의 경우 등급 상승 이전의 원래 등급으로 돌아가게 됩니다.</p>
        <p>리그 승리 시 전용 포켓몬을 획득 가능하며, 리그 포켓몬은 일반적인 방법으로 획득할 수 없습니다.</p>
        <img src="Images/pok_41.jpg" alt="포켓몬 45" />
      </CommandSection>

      <CommandSection title="도감 (컬렉션)" searchQuery={searchQuery}>
        <p>자신의 도감 현황 확인: <span className="legend-prefix">@내 컬렉션</span></p>
        <p>도감 포켓몬 목록: <span className="legend-prefix">@컬렉션목록</span></p>
        <p>도감 보상 효과 목록: <span className="legend-prefix">@컬렉션효과</span></p>
        <p><br />포켓몬 포획 또는 획득 시 1 회에 한해 도감에 등록됩니다.</p>
        <img src="Images/pok_43.jpg" alt="포켓몬 46" />
        <p><br />자신의 도감 수집 현황을 확인할 수 있습니다.</p>
        <img src="Images/pok_44.jpg" alt="포켓몬 47" />
        <br />
        <img src="Images/pok_45.jpg" alt="포켓몬 48" />
        <p><br />지역별 도감을 50%, 100% 수집할 때마다 특정 혜택을 얻을 수 있으며, 효과 목록을 통해 확인이 가능합니다.</p>
        <img src="Images/pok_47.jpg" alt="포켓몬 49" />
        <br />
        <img src="Images/pok_48.jpg" alt="포켓몬 50" />
      </CommandSection>

      <CommandSection title="그 외" searchQuery={searchQuery}>
        <p>제비뽑기 (일일 컨텐츠): <span className="legend-prefix">@제비뽑기</span></p>
        <p>현재 진행중인 이벤트 확인: <span className="legend-prefix">@포켓몬이벤트</span></p>
        <p><br />제비뽑기는 일일 컨텐츠로, 1 회 리로드 당 3 회 도전 가능하며, 운이 좋다면 대량의 금액 등 좋은 보상을 획득할 수 있습니다.</p>
        <p>도감 수집 효과로 제비뽑기 횟수 제한 추가가 가능합니다.</p>
        <img src="Images/pok_46.jpg" alt="포켓몬 51" />
        <p><br />가끔 개발자가 이벤트를 열며, 주로 돈 획득량 증가, 전설의 포켓몬 출현률, 포획률 증가 등이 진행됩니다.</p>
        <img src="Images/pok_42.jpg" alt="포켓몬 52" />
      </CommandSection>
    </article>
  )
}

export default Pok
