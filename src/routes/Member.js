import NavBar from '../components/NavBar';
import BottomBar from '../components/BottomBar';
import TextBox from '../components/TextBox';
import ProfileBox from '../components/ProfileBox';
import styles from './Member.module.css';

function Member(){
  return (
    <body>
    <header>
        <NavBar/>
    </header>
    <main className={styles.mainContainer}>
      {/* header */}
      <div className={styles.headerContainer}>
        <text className={styles.titleText}>E-COPS의 팀을 소개합니다</text>
        {/* link 연결하기 */}
        <text className={styles.linkText}>11기</text>
      </div>
      {/* content - Executive */}
      <div className={styles.contentContainer}>
        <div style={{width: 1000,}}>
          <TextBox text={'Executive'}/>
        </div>
        <div className={styles.rowContainer}>
          <ProfileBox text='교육부 어쩌구' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEd_TAd9zUnbOApOSfOajPL7CUmNQa8V3KQ&usqp=CAU'/>
          <ProfileBox text='교육부 어쩌구' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEd_TAd9zUnbOApOSfOajPL7CUmNQa8V3KQ&usqp=CAU'/>
          <ProfileBox text='교육부 어쩌구' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEd_TAd9zUnbOApOSfOajPL7CUmNQa8V3KQ&usqp=CAU'/>
          <ProfileBox text='교육부 어쩌구' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEd_TAd9zUnbOApOSfOajPL7CUmNQa8V3KQ&usqp=CAU'/>
          <ProfileBox text='교육부 어쩌구' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEd_TAd9zUnbOApOSfOajPL7CUmNQa8V3KQ&usqp=CAU'/>
        </div>
        <div className={styles.rowContainer}>
          <ProfileBox text='교육부 어쩌구' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEd_TAd9zUnbOApOSfOajPL7CUmNQa8V3KQ&usqp=CAU'/>
          <ProfileBox text='교육부 어쩌구' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEd_TAd9zUnbOApOSfOajPL7CUmNQa8V3KQ&usqp=CAU'/>
          <ProfileBox text='교육부 어쩌구' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEd_TAd9zUnbOApOSfOajPL7CUmNQa8V3KQ&usqp=CAU'/>
          <div style={{width: 160, height: 200, opacity: 1}}></div>
          <div style={{width: 160, height: 200, opacity: 1}}></div>
        </div>
      </div>

      {/* content - E-COPS Web-TF */}
      <div className={styles.contentContainer}>
        <div style={{width: 1000,}}>
          <TextBox text={'E-COPS Web-TF'}/>
        </div>
        <div className={styles.rowContainer}>
          <ProfileBox text='고민지 남윤정 김하은' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEd_TAd9zUnbOApOSfOajPL7CUmNQa8V3KQ&usqp=CAU'/>
          <ProfileBox text='고민지 김유경 임영서 서아영 장하은' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEd_TAd9zUnbOApOSfOajPL7CUmNQa8V3KQ&usqp=CAU'/>
          <ProfileBox text='이슬 이한선' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEd_TAd9zUnbOApOSfOajPL7CUmNQa8V3KQ&usqp=CAU'/>
        </div>
      </div>

      {/* content - Our Members */}
      <div className={styles.contentContainer}>
        <div style={{width: 1000,}}>
          <TextBox text={'Our Members'}/>
        </div>
        <div style={{width: 1000, height: 'auto', marginTop: 50}}>
          <text className={styles.contentText}>member member member member member member member member member member member member member member</text>
        </div>
      </div>
    </main>

    {/* bottom bars */}
    <footer>
      <NavBar className={styles.secondNavBar}/>
      <BottomBar/>
    </footer>

    </body>
  );
}

export default Member;