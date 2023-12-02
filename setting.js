// 自定义表单
const custom_form = `
  {
    "type": "custom_form",
    "title": "配置界面",
    "content": [
      {
        "type": "input",
        "text": "攻击次数",
        "placeholder": "默认为3"
      },
      {
        "type": "input",
        "text": "最大攻击距离",
        "placeholder": "默认为500"
      },
      {
        "type": "input",
        "text": "自动攻击间隔(单位tick)",
        "placeholder": "默认为15"
      },
      {
        "type": "input",
        "text": "Pos模式最高Y坐标",
        "placeholder": "默认为83"
      }
    ]
  }
`;
addForm(custom_form, function (...args) {
      executeCommand("/Set ATTACK_COUNT" + args[0]),executeCommand("/Set MAX_RANGE " + args[1]),executeCommand("/Set AUTO_INTERVAL " + args[2]),executeCommand("/Set POS_Y_MAX " + args[3])
     clientMessage("攻击次数为" + args[0] , "最大攻击距离为" + args[1] , "自动攻击间隔为" + args[2] , "Pos模式最高Y坐标为" + args[3] ,  "设置完毕")
})
