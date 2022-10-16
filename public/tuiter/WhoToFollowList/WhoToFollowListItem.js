const WhoToFollowListItem = (who) => {
    return(`
    <li class="list-group-item">
       <div class="row p-2">
          <div class="col-3">
           <img src=${who.avatarIcon} class="wd-follow-logo" alt="java"/>
      </div>
       <div class="col-6">
            <p class="wd-bold text-left wd-small-font">${who.userName} <img src="../../images/verifiedWhite.png" class="wd-verified" alt="java"/>
              <p class="wd-small-font">@${who.handle}</p>
      </div>
           <div class="d-flex align-items-center col-3">
              <button class="btn btn-primary rounded-pill">
                Follow
            </button>
        </div>
      </div>
    </li>`);
}

export default WhoToFollowListItem;
