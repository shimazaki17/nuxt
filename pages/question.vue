<template>
  <main class="main-content question-main">
    <div class="container is-centered">
      <div class="tabs is-centered is-toggle is-toggle-rounded">
        <ul>
          <li class="is-active"><a><span>質問</span></a></li>
          <li><a><span>結果</span></a></li>
        </ul>
      </div>

      <ul class="question--list">
        <li class="question--card card" v-for="(question, idx) in questions" :key="question.id">
          <dl>
            <dt>
              <span class="num">{{idx}}</span><span class="question--card--title">{{question.title}}</span>
            </dt>
            <dd>
              <!--ラジオボタン-->
              <div v-if="question.radio" class="field radio-list">
                  <div class="control">
                    <label class="radio" v-for="item in question.radio" :key="item.id" :class="{selected:question.picked === item.value}">
                      <input type="radio" :name="item.title" :value="item.value" v-model="question.picked" class="radio-button">
                      {{item.title}}
                    </label>
                </div>

                <div v-if="question.picked === 'yes'">
                  <!--additionalForm-->
                  <div v-if="question.additionalForm">
                    <dl v-for="additionalQuestion in question.additionalForm" :key="additionalQuestion.id">
                      <dt>
                        <span class="question--card--title">{{additionalQuestion.title}}</span>
                      </dt>
                      <dd>
                        <div class="control" v-if="additionalQuestion.holder">
                          <input class="input" type="text" :placeholder="additionalQuestion.holder">
                        </div>
                      </dd>
                    </dl>
                  </div>
                  <!--additionalCheckList-->
                  <div v-if="question.additionalCheckBox">
                    <ul>
                      <li v-for="item in question.additionalCheckBox" :key="item.id">
                        <label class="checkbox">
                          <input type="checkbox" v-model="question.checked" :value="item.title">{{item.title}}
                        </label>
                      </li>
                    </ul>
                    <div class="">{{question.checked}}</div>
                  </div>
                  <!--message-->
                  <div class="notification" v-if="question.message">
                    <span class="">{{question.message}}</span>
                  </div>
                </div>


              </div>

              <!--チェックリストがある場合 -->
              <div v-if="question.checkList" class="check-list">
                <ul>
                  <li v-for="item in question.checkList" :key="item.id">
                    <label class="checkbox">
                      <input type="checkbox" v-model="question.checked" :value="item.listName">{{item.listName}}
                    </label>
                  </li>
                </ul>
                <div class="">{{question.checked}}</div>
              </div>


              <div class="control" v-if="question.placeholder">
                <input class="input" type="text" :placeholder="question.placeholder">
              </div>

            </dd>
          </dl>
        </li>
      </ul>
      <div class="has-text-centered">
        <nuxt-link to="/" class="button is-rounded is-primary">作成する</nuxt-link>
      </div>
    </div>
  </main>
</template>


<script>
  export default {
    name: 'question',
    head() {
      return {
        title: this.title,
        meta: [
          { hid: 'description', name: 'description', content: 'Hinadan 弁護士監修のプライバシーポリシー自動生成' }
        ]
      }
    },
    data() {
      return {
        title: 'Question',
        answerData: [],
        questions: [
          {
            id:1,
            title: '法人名は？',
            placeholder: '法人名を入力'
          },
          {
            id:2,
            title: '個人情報の管理責任者は？',
            placeholder: '責任者の役職を入力'
          },
          {
            id:3,
            title: '個人情報の問い合わせ先は？',
            placeholder: '電話番号かメールアドレスを入力'
          },
          {
            id:4,
            title: '個人情報の利用目的は？',
            placeholder: '利用目的を記入してください',
            checked: [],
            checkList: [
              {
                listName: 'サービスを提供するため',
                check: false
              },
              {
                listName: 'サービスの利用に伴う連絡のため',
                check: false
              },
              {
                listName: '利用者の個人認証のため',
                check: false
              },
              {
                listName: 'サービスの利用状況の調査、分析及びマーケティング',
                check: false
              },
              {
                listName: 'ご意見、ご要望、お問い合わせ等に回答するため',
                check: false
              },
              {
                listName: ' 電子メール、郵送等によりキャンペーン情報、アンケート等をご案内するため',
                check: false
              },
              {
                listName: '各種キャンペーンの当選通知およびプレゼント等の発送のため',
                check: false
              },
              {
                listName: '利用約款等で禁じている偽情報登録などの調査と、それに基づく当該申込内容の詳細確認',
                check: false
              }
            ]
          },
          {
            id:5,
            title: '個人情報の共同利用はありますか？',
            placeholder: '',
            picked: 'no',
            additionalForm: [
              {
                title:'個人情報を共同利用する企業名',
                holder: '企業及びサービス名'
              },
              {
                title:'共同で利用される個人情報の項目',
                holder: '企業及びサービス名'
              },
              {
                title:'利用目的',
                holder: '企業及びサービス名'
              },
              {
                title:'共同利用する個人情報の管理責任者',
                holder: '企業及びサービス名'
              }
            ],
            radio: [
              {
                title: '共同利用がない',
                value: 'no',
              },
              {
                title: '共同利用がある',
                value: 'yes',
              }
            ]
          },
          {
            id:6,
            title: '機微な個人情報（※）を取得しますか？',
            placeholder: '',
            showMessage: false,
            message: '機微な個人情報を取得する画面で同意ボタンを設置するなどして本人から明示的な同意を得る必要があります（プライバシーポリシー外で明示する必要があります）。',
            picked: 'no',
            radio: [
              {
                title: '取得がない',
                value: 'no',
              },
              {
                title: '取得がある',
                value: 'yes',
              }
            ]
          },
          {
            id:7,
            title: '匿名加工情報（※）を作成しますか？',
            picked: 'no',
            radio: [
              {
                title: '作成しない',
                value: 'no',
              },
              {
                title: '作成する',
                value: 'yes',
              }
            ],
            additionalForm: [
              {
                title:'提供する匿名加工情報に含まれる個人に関する情報の項目',
                holder: '提供する匿名加工情報に含まれる個人情報の項目'
              }
            ]
          },
          {
            id:8,
            title: '匿名加工情報を第三者に提供しますか？',
            placeholder: ''
          },
          {
            id:9,
            title: '個人情報（匿名加工・機微な個人情報を除く）を第三者に提供しますか？',
            placeholder: ''
          },
          {
            id:10,
            title: '行動ターゲティング広告の利用はありますか？',
            placeholder: '',
            picked: 'no',
            radio: [
              {
                title: 'ない',
                value: 'no',
              },
              {
                title: 'ある',
                value: 'yes',
              }
            ],
            additionalForm: [
              {
                title:'利用している行動ターゲティング広告の提供会社を記入してください',
                holder: '会社名を入力'
              }
            ],
          },
          {
            id:11,
            title: 'Google Adsense, Amazonアソシエイトの利用はありますか？',
            picked: 'no',
            checked: [],
            radio: [
              {
                title: 'していない',
                value: 'no',
              },
              {
                title: 'している',
                value: 'yes',
              }
            ],
            additionalCheckBox: [
              {
                title: 'Google Adsense',
                check: false
              },
              {
                title: 'Amazonアソシエイト',
                check: false
              }
            ]
          },
          {
            id:12,
            title: '認定個人情報保護団体に加入していますか？',
            picked: 'no',
            radio: [
              {
                title: 'していない',
                value: 'no',
              },
              {
                title: 'している',
                value: 'yes',
              }
            ],
            additionalForm: [
              {
                title:'利用している行動ターゲティング広告の提供会社を記入してください。',
                holder: '会社名を入力'
              }
            ],
          },
          {
            id:13,
            title: '外国への個人情報の移転はありますか？',
            message: '個人情報を取得する画面で同意ボタンを設置するなどして本人から明示的な同意を得る必要があります（プライバシーポリシー外で明示する必要があります。）',
            picked: 'no',
            radio: [
              {
                title: 'しない',
                value: 'no',
              },
              {
                title: 'する',
                value: 'yes',
              }
            ]
          }
        ]
      }
    }
  }


</script>


<style lang="scss" scoped>
  .question {
    &-main {

      .tabs {
        margin-bottom: 3rem;
      }

    }
    &--list {
      padding: 0 1rem;
      margin-bottom: 3rem;
    }
    &--card {
      padding: 1rem;
      border-radius: .5rem;
      margin-bottom: 1rem;
      .num {
        height: 3rem;
        width: 3rem;
        border-radius: 50%;
        background-color: $pink;
        color: $white;
        margin-right: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
      }
      &--title {
        font-weight: bold;
      }
      .check-list {
        margin-bottom: 2rem;
        ul {
          padding-left: 4rem;
          margin-bottom: 2rem;
        }
        .checkbox {
          margin-bottom: .3rem;
          input {
            margin-right: .5rem;
          }
        }
      }
      dt {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 1rem;
        span {
          vertical-align: middle;
        }
      }
    }
  }
</style>
