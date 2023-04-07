import { useRouter } from "next/router";
import styles from "./index.module.css";
type Props = {};
export default function Warning({}: Props) {
  const router = useRouter();
  console.log("router", router.query);
  const clickButton = () => {
    router.push("/novel/0");
  };
  return (
    <div>
      <div>;XLetter</div>
      <div>
        <div>
          <div>XLetter의 첫걸음에 관심을 가져 주신 모든 분들 감사합니다!🙇‍♀️</div>
          <div>테스트에 참여하기에 앞서 몇 가지 안내드릴 사항이 있어요.</div>
        </div>
        <div>
          <div>XLetter의 Closed Beta는, </div>
          <div>
            <div>
              <div>
                <div>1</div>
                <div>PC에 최적화되어 있습니다.</div>
              </div>
              <div>가능하면 모바일이 아닌 PC로 접속해 주세요. </div>
            </div>
            <div>
              <div>
                <div>2</div>
                <div>글 중간에 분기점이 존재하는 인터랙티브 웹소설이에요.</div>
              </div>
              <div>
                당황하지 마시고 두 가지 선택지 중 한 가지를 골라 주세요. 선택의
                기회는 단 한 번이랍니다.
              </div>
              <div>
                <div>
                  <div>1화</div>
                  <div>
                    2화 <div>checkbox</div>
                  </div>
                  <div>3화</div>
                  <div>4화</div>
                  <div>
                    5화<div>checkbox</div>
                  </div>
                </div>
                <div>
                  <div>checkbox</div>
                  <div>: 분기점이 존재하는 회차 </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div>3</div>
                <div>테스터님의 평가를 기다리고 있어요.</div>
              </div>
              <div>
                모두 읽으신 후 설문에 참여해 주세요. 지갑 주소를 입력하면
                에어드랍 이벤트에 자동으로 참여됩니다.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button onClick={clickButton}>모두 확인했어요!</button>
      </div>
    </div>
  );
}
