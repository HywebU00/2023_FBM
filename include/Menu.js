const content = `
        <button class="sideBtn"></button>
        <div class="sideMenu">
          <div class="logo">
            <div class="img"><img src="./images/logo.png" alt="" /></div>
            <span><img src="./images/logo_font.png" alt="" /></span>
          </div>
          <nav>
            <ul>
              <li>
                <a href="mp.html"><span class="pageTitle">儀表板</span></a>
              </li>
              <li>
                <a href="#"><span>資源申請</span></a>
                <ul>
                  <li><a href="#">消耗品申請</a></li>
                  <li><a href="#">非消耗品物品申請</a></li>
                  <li><a href="#">會議室預約</a></li>
                  <li><a href="#">車輛管理</a></li>
                </ul>
              </li>
              <li>
                <a href="#"><span>業務系統</span></a>
                <ul>
                  <li><a href="project.html">國會業務系統</a></li>
                  <li><a href="#">2885問題管理系統</a></li>
                  <li><a href="#">差勤系統</a></li>
                  <li><a href="#">公文系統</a></li>
                </ul>
              </li>
              <li><a href="#"><span>學習專區</span></a></li>
              <li><a href="#"><span>文件管理</span></a></li>
              <li><a href="#"><span>問卷調查</span></a></li>
              <li><a href="#"><span>電腦軟體管理</span></a></li>
              <li><a href="#"><span>通訊錄</span></a></li>
              <li><a href="#"><span>個人資料維護</span></a></li>
            </ul>
          </nav>
          <div class="account">
            <div class="pic"><img src="./images/account.jpg" alt="" /></div>
            <div class="infoBox">
              <div class="name">Elle Wang</div>
              <div class="department">第一新建工程處</div>
            </div>
            <button class="logout"></button>
          </div>
        </div>`;

document.write(content);
