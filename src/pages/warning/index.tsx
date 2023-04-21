import { useRouter } from "next/router";
import styles from "./index.module.css";
import Image from "next/image";
type Props = {};
export default function Warning({}: Props) {
  const router = useRouter();
  console.log("router", router.query);
  const clickButton = () => {
    router.push("/novel/0");
  };
  return (
    <div className={styles.container}>
      <div className={styles.logo}>;XLetter</div>
      <div className={styles.content_container}>
        <div className={styles.content_wrapper}>
          <div className={styles.title}>
            <div className={styles.main_text}>
              XLetter의 첫걸음에 관심을 가져 주신 모든 분들 감사합니다!🙇‍♀️
            </div>
            <div className={styles.sub_text}>
              테스트에 참여하기에 앞서 몇 가지 안내드릴 사항이 있어요.
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.text}>XLetter의 Closed Beta는, </div>
            <div className={styles.warn_container}>
              <div className={styles.item}>
                <div className={styles.number}>1</div>
                <div className={styles.item_text}>
                  <div className={styles.text}>PC에 최적화되어 있습니다.</div>
                  <div className={styles.text_gray}>
                    가능하면 모바일이 아닌 PC로 접속해 주세요.{" "}
                  </div>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.number}>2</div>
                <div className={styles.item_text}>
                  <div className={styles.text}>
                    글 중간에 분기점이 존재하는 인터랙티브 웹소설이에요.
                  </div>
                  <div className={styles.text_gray}>
                    당황하지 마시고 두 가지 선택지 중 한 가지를 골라 주세요.
                    선택의 기회는 단 한 번이랍니다.
                  </div>
                  <div className={styles.checkbox_area}>
                    <div className={styles.checkbox_border}>
                      <div className="">1화</div>
                      <div className={styles.checkbox_text}>
                        2화
                        <Image
                          className={styles.checkbox}
                          alt="checkbox"
                          src={"/png/checkbox.png"}
                          width={20}
                          height={20}
                        />
                      </div>
                      <div className="">3화</div>
                      <div className="">4화</div>
                      <div className={styles.checkbox_text}>
                        5화
                        <Image
                          className={styles.checkbox}
                          alt="checkbox"
                          src={"/png/checkbox.png"}
                          width={20}
                          height={20}
                        />
                      </div>
                    </div>
                    <div className={styles.transparent}>
                      <Image
                        className={styles.checkbox}
                        alt="checkbox"
                        src={"/png/checkbox.png"}
                        width={20}
                        height={20}
                      />
                      <div className={""}>: 분기점이 존재하는 회차 </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.number}>3</div>

                <div className={styles.item_text}>
                  <div className={styles.text}>
                    테스터님의 평가를 기다리고 있어요.
                  </div>
                  <div className={styles.text_gray}>
                    모두 읽으신 후 설문에 참여해 주세요. 지갑 주소를 입력하면
                    에어드랍 이벤트에 자동으로 참여됩니다.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.button_area}>
              <button className={styles.button} onClick={clickButton}>
                모두 확인했어요!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
