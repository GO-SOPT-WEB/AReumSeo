**✅Presentational Component**

- UI를 표시하는 컴포넌트
- 직접 상태 값을 관리하지 않고, Container component가 전달해준 props를 전달받아서 출력
- 직접적으로 보여지는 부분 담당
- UI 관련된 상태만 가질 수 있음
- 직접적으로 데이터를 변경하지 ❌❌
- DOM 마크업 & 스타일 가짐
    
    ```jsx
    // Presentation Component
    function SearchFormView() {
    
        const {searchKey, onChange, onSubmit} = props;
    
        return (
            <form onSubmit={onSubmit}>
                <div>
                    <label>제목</label>
                    <input type="text" value={searchKey} onChange={onChange} name="searchKey"/>
                    <button type="submit">검색</button>
                </div>
            </form>
        )
    }
    export default SearchFormView;
    ```
    
<br />

**✅Container Component**

- API 호출, state 관리, 이벤트 처리 등의 작업을 수행하는 컴포넌트
- 변경된 상태 값을 props를 통해 Presentational Component로 전달
- DOM 마크업이나 스타일을 가지지 ❌❌
    
    ```jsx
    // Container Component
    function SearchFormContainer() {
    
        const [searchKey, setSearcKey] = useState();
    
        function onChange(event) {
            setSearcKey(event.target.value);
        }
    
        function onSubmit(event) {
            event.preventDefault();
            console.log(searchKey);
        }
    
        return (
            <SearchFormView
                searchKey={searchKey}
                onChange={onChange}
                onSubmit={onSubmit}
            />
        )
    }
    
    export default SearchFormContainer;
    ```
    

<br />

****✅ Presentational Component vs Container Component****

- Presentational Component: stateless -> 화면을 표현하는 부분
- Container Component: stateful -> 데이터를 다루는 부분
- 한마디로, Presentational Component는 화면을 표현하는 부분이고 Container Component는 데이터를 다루는 부분이다. 그러나 이것은 절대적인 기준이 아니기 때문에,  state 포함 여부와 같은 기능적인 부분에 집중하기 보단 해당 컴포넌트가 어떤 목적을 가지고 있는지, 어떤 기능에 강점이 있는지 등에 집중하는 것이 좋다.

<br />

****✅ Custom Hooks****

- 기존의 Presentational/ Container 패턴에서 로직을 react hooks로 관리하는 것
- 기존 Container에서는 공통 로직 발생 시 다른 Containet component로 로직을 넘겨주지 못했지만, hooks로 로직 관리 시 UI 재사용을 넘어 로직까지 재사용이 가능해졌다.
- 로직의 분리로 쉽게 로직을 재사용할 수 있지만, 컴포넌트와 로직의 긴밀한 동작 방식을 이해하지 못하면 코드를 이해하기 어려워질 수 있다는 단점이 있다.
    
    ```jsx
    // Hooks
    export default function useSearch() {
    
        const [searchKey, setSearcKey] = useState();
    
        
        function onChange(event) {
            setSearcKey(event.target.value);
        }
    
        function onSubmit(event) {
            event.preventDefault();
            console.log(searchKey);
        }
    
        return {
            searchKey,
            onChange,
            onSubmit,
        }
    }
    ```
    

<br />

****✅ Atomic****

- 리액트 컴포넌트를 atom(원자) 단위로 설계하는 구조
- 원자가 결합해서 분자가 되고 분자가 결합해서 유기체가 되듯이, 컴포넌트를 가장 작은 단위에서 하나 씩 결합하여 만드는 형태
    - Atoms: HTML 태그 같은 label, input, button, link 태그와 같이 가장 작은 단위의 컴포넌트
        - 로그인 화면의 아이디 input
    - Molecule: Atom을 여러 개 조합한 컴포넌트
        - 로그인 화면의 아이디 input + 비밀번호 input
    - Organisms: Molecule과 Atom들을 조합해서 만든 컴포넌트
        - 로그인 화면의 아이디 input + 비밀번호 input
    - Templates: 위에서  만든 컴포넌트들을 넣을 레이아웃
    - Pages: Templates에 만든 컴포넌트들을 모두 주입한 컴포넌트
        - 아이디 로그인, QR 코드, 비밀번호 찾기 등 모든 기능을 주입한 최종 로그인 화면

<br />

****✅ 어떤 방식을 언제 택해야 좋은 것일까?****

프로젝트 설계 시 특정 디자인 패턴을 고집하기 보단, 해당 프로젝트와 개발 패턴을 고려해야 한다. 예를 들어 디자인이 잘 나와있어서 디자인 시스템을 구축하기 편한 환경이라면 atomic 구조를 잘 활용할 수 있을 것이다. 그러나 기획이나 디자인이 자주 변경되는 환경이라면 atomic 디자인을 활용하는 것이 좋을 지 다시 한번 생각해봐야 한다.

이처럼 필요성에 따라 여러 디자인 패턴을 함께 사용하거나 환경에 맞는 규칙을 만들어서 적용하고, 어떤 기준으로 파일을 분류하여 패키지 구조를 설정할 지에 대해서도 잘 고민해봐야 한다.

<br />

****✅ 프론트엔드에게 디자인 패턴은 어떤 의미일까?****

프론트엔드에서 디자인 패턴은 지속적으로 관리가 잘 되는 코드를 위한 하나의 도구라는 생각이 든다. 단순히 어떤 디자인 패턴이 좋은지에 대해 생각하기 보단, 프론트엔드 관점에서 어떤 아키텍처가 나오고 있는지, 그들이 어떻게 진화해 왔는지 등 디자인 패턴에 대한 흐름을 파악하는 것이 중요한 것 같다.