const seriesSkill = [
    {
        name:'闢獣の力',
        keywords:['びゃくじゅうのちから','ちからじまん']
    },
    {
        name:'火竜の力',
        keywords:['かりゅうのちから','しゃくねつか']
    },
    {
        name:'兇爪竜の力',
        keywords:['きょうそうりゅうのちから','れんげききょうか']
    },
    {
        name:'護鎖刃竜の命脈',
        keywords:['ごさじんりゅうのめいみゃく','はかいしょうどう']
    },
    {
        name:'羽衣竜の守護',
        keywords:['はごろもりゅうのしゅご','しゅごのヴぇーる']
    },
    {
        name:'煌雷竜の力',
        raad:['こうらいりゅうのちから','らいらいきょうめい']
    },
    {
        name:'雷顎竜の闘志',
        keywords:['らいがくりゅうのとうし','むじんぞう']
    },
    {
        name:'雪獅子の闘志',
        keywords:['ゆきじしのとうし','うぉーくらい']
    },
    {
        name:'鎧竜の守護',
        keywords:['よろいりゅうのしゅご','がいりゅうのしゅご','むきずのじゅうそう']
    },
    {
        name:'凍峰竜の反逆',
        keywords:['とうほうりゅうのはんぎゃく','そくばくはんこう']
    },
    {
        name:'暗器蛸の力',
        keywords:['あんきしょうのちから','ばんゆうのしょくたく']
    },
    {
        name:'獄焔蛸の反逆',
        keywords:['ごくえんしょうのはんぎゃく','こんげき','うらみげき']
    },
    {
        name:'黒蝕竜の力',
        keywords:['こくしょくりゅうのちから','こくしょくいったい']
    },
    {
        name:'鎖刃竜の飢餓',
        keywords:['さじんりゅうのきが','かそくさいせい']
    },
    {
        name:'泡狐竜の力',
        keywords:['ほうこりゅうのちから','うたかたのまい','ほうまつのまい']
    },
    {
        name:'白熾龍の脈動',
        keywords:['はくしりゅうのみゃくどう','ちょうかいふくりょく']
    },
    {
        name:'千刃竜の闘志',
        keywords:['せんじんりゅうのとうし','せんじんのみかわし']
    },
    {
        name:'海竜の渦雷',
        keywords:['かいりゅうのからい','そうらいいっせん']
    },
    {
        name:'暗黒騎士の証',
        keywords:['あんこくきしのあかし','だーくあーつ','ぶらっくないと']
    },
    {
        name:'オメガレゾナンス',
        keywords:['おめがれぞなんす','れぞなんす']
    },
    {
        name:'巨戟龍の黙示録',
        keywords:['きょげきりゅうのもくしろく','せんせんこおう']
    }
];

const groupSkill = [
    {
        name:'鱗張りの技法',
        keywords:['うろこばりのぎほう','のりめいじん']
    },
    {
        name:'革細工の柔性',
        keywords:['かわざいくのじゅうせい','さいしゅうのたつじん']
    },
    {
        name:'毛皮の昂揚',
        keywords:['けがわのこうよう','ふくつ']
    },
    {
        name:'甲虫の知らせ',
        keywords:['こうちゅうのしらせ','はにーはんたー']
    },
    {
        name:'護竜の脈動',
        keywords:['ごりゅうのみゃくどう','りゅうにゅうかっせい']
    },
    {
        name:'ヌシの誇り',
        keywords:['ぬしのほこり','げきれい']
    },
    {
        name:'甲虫の擬態',
        keywords:['こうちゅうのぎたい','しのびあるき']
    },
    {
        name:'革細工の滑性',
        keywords:['かわざいくのかっせい','かっそうきょうか']
    },
    {
        name:'鱗重ねの工夫',
        keywords:['うろこがさねのくふう','ふんき']
    },
    {
        name:'毛皮の誘惑',
        keywords:['けがわのゆうわく','ようどう']
    },
    {
        name:'護竜の守り',
        keywords:['ごりゅうのまもり','がーでぃあんのまもり','りゅうとのまもり']
    },
    {
        name:'ヌシの憤激',
        keywords:['ぬしのふんがい','しちゅうにかつ']
    },
    {
        name:'先達の導き',
        keywords:['せんだつのみちびき','たんさくしゃのこううん']
    },
    {
        name:'栄光の誉れ',
        keywords:['えいこうのほまれ','こううん']
    },
    {
        name:'ヌシの魂',
        keywords:['ぬしのたましい','こんじょうかかん']
    }
];

const createSkillColumn = (listNode,checkFlg,seriesSkillValue,groupSkillValue) => {
    const skill = document.createElement('div');
    skill.classList.add('skill');

    const unnecessary = document.createElement('div');
    unnecessary.classList.add('unnecessary');
    const label = document.createElement('label');
    label.innerText = '破棄';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    if (checkFlg) checkbox.setAttribute('checked','checked');
    checkbox.addEventListener('change',_ => saveData());
    label.appendChild(checkbox);

    const deleteButton = document.createElement('button');
    deleteButton.innerText = '削除';
    deleteButton.addEventListener('click',deleteColumn);

    unnecessary.appendChild(label);
    unnecessary.appendChild(deleteButton);

    skill.appendChild(unnecessary);

    const div = document.createElement('div');

    const skillWrapper1 = document.createElement('div');
    skillWrapper1.classList.add('skill-wrapper');

    const seriesSkill = document.createElement('input');
    seriesSkill.type = 'text';
    seriesSkill.value = seriesSkillValue;
    seriesSkill.addEventListener('input',seriesSkillSearch);

    const seriesSkillList = document.createElement('div');
    seriesSkillList.classList.add('wordList');
    seriesSkillList.classList.add('nodisp');

    skillWrapper1.appendChild(seriesSkill);
    skillWrapper1.appendChild(seriesSkillList);

    const skillWrapper2 = document.createElement('div');
    skillWrapper2.classList.add('skill-wrapper');

    const groupSkill = document.createElement('input');
    groupSkill.type = 'text';
    groupSkill.value = groupSkillValue;
    groupSkill.addEventListener('input',groupSkillSearch);

    const groupSkillList = document.createElement('div');
    groupSkillList.classList.add('wordList');
    groupSkillList.classList.add('nodisp');

    skillWrapper2.appendChild(groupSkill);
    skillWrapper2.appendChild(groupSkillList);

    div.appendChild(skillWrapper1);
    div.appendChild(skillWrapper2);
    skill.appendChild(div);

    listNode.insertBefore(skill,listNode.querySelector('.addButton'));
}

const seriesSkillSearch = e => {
    const inputWord = e.currentTarget.value;
    const wordList = e.currentTarget.parentElement.querySelector('.wordList');
    wordList.innerHTML = '';

    if(inputWord === '') {
        wordList.classList.add('nodisp');
        return;
    } else {
        wordList.classList.remove('nodisp');
    }
    seriesSkill
        .filter(item => item.keywords?.some(keyword => keyword.match(`^${inputWord}`)))
        .forEach(item => {
            const p = document.createElement('p');
            p.innerText = item.name;
            p.addEventListener('click',selectList);
            wordList.appendChild(p);
        });
}

const groupSkillSearch = e => {
    const inputWord = e.currentTarget.value;
    const wordList = e.currentTarget.parentElement.querySelector('.wordList');
    wordList.innerHTML = '';

    if(inputWord === '') {
        wordList.classList.add('nodisp');
        return;
    } else {
        wordList.classList.remove('nodisp');
    }
    groupSkill
        .filter(item => item.keywords?.some(keyword => keyword.match(`^${inputWord}`)))
        .forEach(item => {
            const p = document.createElement('p');
            p.innerText = item.name;
            p.addEventListener('click',selectList);
            wordList.appendChild(p);
        });
}

const selectList = e => {
    e.currentTarget.parentElement.parentElement.children[0].value = e.currentTarget.innerText;
    e.currentTarget.parentElement.classList.add('nodisp');

    saveData();
}

const addColumn = e => {
    const parentRow = e.currentTarget.parentElement.parentElement.parentElement;

    createSkillColumn(parentRow,false,'','');

    saveData();
}

const deleteColumn = e => {
    e.currentTarget.parentElement.parentElement.parentElement.removeChild(e.currentTarget.parentElement.parentElement);

    saveData();
}

const addRow = (weaponName,skillData) => {
    const body = document.getElementById('body');
    const row = document.createElement('div');
    row.classList.add('row');

    const weapon = document.createElement('div');
    weapon.classList.add('weapon');

    const div1 = document.createElement('div');
    div1.innerText = '武器名 ';
    const deleteButton = document.createElement('button');
    deleteButton.innerText = '削除';
    deleteButton.addEventListener('click',deleteRow);
    const weaponNameInput = document.createElement('input');
    weaponNameInput.classList.add('weaponName');
    weaponNameInput.type = 'text';
    weaponNameInput.value = weaponName;
    weaponNameInput.addEventListener('click',_ => saveData());

    div1.appendChild(deleteButton);
    div1.appendChild(document.createElement('br'));
    div1.appendChild(weaponNameInput);
    weapon.appendChild(div1);

    const label = document.createElement('div');
    label.classList.add('label');
    label.innerHTML = `
<div>シリーズスキル</div>
<div>グループスキル</div>
`;

    row.appendChild(weapon);
    row.appendChild(label);

    const addButton = document.createElement('div');
    addButton.classList.add('addButton');

    const div2 = document.createElement('div');
    const btn = document.createElement('button');
    btn.classList.add('addColumn');
    btn.innerText = '+';
    btn.addEventListener('click',addColumn);

    
    const skillList = document.createElement('div');
    skillList.classList.add('skillList');
    
    div2.appendChild(btn);
    addButton.appendChild(div2);
    skillList.appendChild(addButton);
    skillData.forEach(data => createSkillColumn(skillList,data.checked,data.seriesSkill,data.groupSkill));
    row.appendChild(skillList);
    body?.insertBefore(row,body.querySelector('.footer'));

    saveData();
}

const deleteRow = e => {
    document.getElementById('body')?.removeChild(e.currentTarget.parentElement.parentElement.parentElement);

    saveData();
}

const saveData = () => {
    const inputData = [...document.querySelectorAll('.row')]
        .map(row => {
            const weaponName = row.querySelector('.weaponName').value;
            
            const skillData = [...row.querySelectorAll('.skill')]
                .map(skill => {
                    const checked = skill.querySelector('input[type=checkbox]').checked;
                    const seriesSkill = skill.querySelector('.skill-wrapper:nth-child(1) input').value;
                    const groupSkill = skill.querySelector('.skill-wrapper:nth-child(2) input').value;

                    const data = {checked,seriesSkill,groupSkill};
                    return data;
                });

            return {weaponName,skillData};
        });

    localStorage.setItem('data',JSON.stringify(inputData));
}

const loadData = () => {
    const body = document.getElementById('body');
    [...body?.querySelectorAll('.row')].forEach(elm => body?.removeChild(elm));

    const inputData = JSON.parse(localStorage.getItem('data')??'[]');

    if (inputData.length === 0) {
        addRow('',[{checked:false,seriesSkill:'',groupSkill:''}]);
    } else {
        inputData.forEach(data => addRow(data.weaponName,data.skillData));
    }
}

const tableMove = count => {
    const inputData = JSON.parse(localStorage.getItem('data')??'[]');

    inputData.forEach(data => {
        console.log(data);
        [...Array(count)].forEach(_ => data.skillData.shift());
    });

    localStorage.setItem('data',JSON.stringify(inputData));
    loadData();
}

document.addEventListener('DOMContentLoaded',_ => {
    document.getElementById('moveBtn')?.addEventListener('click',_ => {
        const count = document.getElementById('move').value;
        if (!count) return;
        tableMove(count);
    });
    document.getElementById('addRow')?.addEventListener('click',_ => {
        addRow('',[{seriesSkill:'',groupSkill:''}]);
    });
    document.getElementById('import')?.addEventListener('click',_ => {
        const input = window.prompt('現在入力されている内容は破棄されます。');

        if (input === '') return;
        try {
            JSON.parse(input);
            localStorage.setItem('data',input);
            loadData();
        } catch {
            alert('入力エラー');
        }
    });
    document.getElementById('export')?.addEventListener('click',_ => {
        window.prompt('コピーしてください。',localStorage.getItem('data'));
    });

    loadData();
});
