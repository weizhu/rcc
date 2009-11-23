/**
 * @provides FB.XFBML.Name
 * @layer XFBML
 * @requires FB.Type FB.XFBML FB.Event FB.Util FB.Dom FB.XFBML.Element FB.Data FB.Helper
 */

/**
 * @class FB.XFBML.Name
 * @extends  FB.XFBML.Element
 */
FB.subclass('XFBML.Name', 'XFBML.Element', null,
  /*
   * Instance methods
   */
  {
  process: function() {
    this._uid = this.getAttribute('uid', null);
    if(this._uid == 'loggedinuser' && FB.App.session) {
      this._uid = FB.App.session.uid;
    }

    if (!this._uid) {
      return;
    }

    this._firstnameonly = this._getBoolAttribute('firstnameonly', false);
    this._lastnameonly = this._getBoolAttribute('lastnameonly', false);

    var fields = [];
    if (this._firstnameonly) {
      fields.push('first_name');
    } else if (this._lastnameonly) {
      fields.push('last_name');
    } else {
      fields.push('name');
    }

    this._possessive = this._getBoolAttribute('possessive', false);
    this._reflexive = this._getBoolAttribute('reflexive', false);
    this._objective = this._getBoolAttribute('objective', false);
    this._linked = this._getBoolAttribute('linked', true);
    this._subjectId = this.getAttribute('subjectid', null);
    if (this._subjectId) {
      fields.push('sex');

      if (this._subjectId == FB.Util.getLoggedInUser()) {
        this._reflexive = true;
      }
    }

    var data;
    // Wait for status to be known
    FB.App.monitor('status', FB.bind(function() {
      //Is Element still in DOM tree
      if (!this.isValid())
        return true; // Stop processing

      if (FB.App.status) {
        if (FB.Util.isUser(this._uid)) {
          data = FB.Data._selectByIndex(fields, 'user', 'uid', this._uid);
        } else {
          data = FB.Data._selectByIndex(['name', 'id'], 'profile', 'id', this._uid);
        }
        data.wait(FB.bind(function(data) {
          if (this._uid) {
            if (this._subjectId == this._uid) {
              this._renderPronoun(data[0]);
            }
            else {
              this._renderOther(data[0]);
            }
          }
        }, this));
      }
    }, this));
  },

  /**
   * Given this name, figure out the proper (English) pronoun for it.
   */
  _renderPronoun: function(userInfo) {
    var word = '';
    var objective = this._objective;
    if (this._subjectId) {
      objective = true;
      if (this._subjectId === this._uid) {
        this._reflexive = true;
      }
    }
    if (this._uid == FB.Connect.get_loggedInUser() &&
        this._getBoolAttribute('useyou', true)) {
      if (this._possessive) {
        if (this._reflexive) {
          word = 'your own';
        }
        else {
          word = 'your';
        }
      }
      else {
        if (this._reflexive) {
          word = 'yourself';
        }
        else {
          word = 'you';
        }
      }
    }
    else {
      switch (userInfo.sex) {
        case 'male':
          if (this._possessive) {
            word = (this._reflexive) ? 'his own' : 'his';
          }
          else {
            if (this._reflexive) {
              word = 'himself';
            }
            else if (objective) {
              word = 'him';
            }
            else {
              word = 'he';
            }
          }
          break;
        case 'female':
          if (this._possessive) {
            word = (this._reflexive) ? 'her own' : 'her';
          }
          else {
            if (this._reflexive) {
              word = 'herself';
            }
            else if (objective) {
              word = 'her';
            }
            else {
              word = 'she';
            }
          }
          break;
        default:
          if (this._getBoolAttribute('usethey', true)) {
            if (this._possessive) {
              if (this._reflexive) {
                word = 'their own';
              }
              else {
                word = 'their';
              }
            }
            else {
              if (this._reflexive) {
                word = 'themselves';
              }
              else if (objective) {
                word = 'them';
              }
              else {
                word = 'they';
              }
            }
          }
          else {
            if (this._possessive) {
              if (this._reflexive) {
                word = 'his/her own';
              }
              else {
                word = 'his/her';
              }
            }
            else {
              if (this._reflexive) {
                word = 'himself/herself';
              }
              else if (objective) {
                word = 'him/her';
              }
              else {
                word = 'he/she';
              }
            }
          }
          break;
      }
    }
    if (this._getBoolAttribute('capitalize', false)) {
      word = FB.Util.upperCaseFirstChar(word);
    }
    this.dom.innerHTML = word;
  },

  /**
   * Handle rendering of the element, using the
   * metadata that came with it.
   */
  _renderOther: function(userInfo) {
    if (!userInfo) {
      return;
    }
    var name = '';
    var html = '';
    var network = '';
    if (this._uid == FB.Util.getLoggedInUser() &&
        this._getBoolAttribute('useyou', true)) {
      if (this._reflexive) {
        if (this._possessive) {
          name = 'your own';
        }
        else {
          name = 'yourself';
        }
      }
      else {
        //  The possessive works really nicely this way!
        if (this._possessive) {
          name = 'your';
        }
        else {
          name = 'you';
        }
      }
    }
    else {
      //  FQLCantSee structures will show as null.
      if (null === userInfo.first_name) {
        userInfo.first_name = '';
      }
      if (null === userInfo.last_name) {
        userInfo.last_name = '';
      }
      if (this._firstnameonly) {
        name = userInfo.first_name;
      }
      else if (this._lastnameonly) {
        name = userInfo.last_name;
      }

      if (!name) {
        name = userInfo.name;
      }

      if (name !== '' && this._possessive) {
        name += '\'s';
      }
    }

    if (!name) {
      name = this.getAttribute('ifcantsee', 'Facebook User');
    }
    if (name) {
      if (this._getBoolAttribute('capitalize', false)) {
        name = FB.Util.upperCaseFirstChar(name);
      }
      if (this._linked) {
        html = FB.Util.getProfileLink(userInfo, name,
          this.getAttribute('href', null));
      }
      else {
        html = name;
      }
    }
    this.dom.innerHTML = html;
  }
});
