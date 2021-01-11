<?php
include_once "../base.php";

$db = new DB($_POST['table']);
$row = $db->find($_POST['id']);
$do = $_POST['do'];
if (!empty($_FILES['img']['tmp_name'])) {
    $_POST['img'] = $_FILES['img']['name'];
    move_uploaded_file($_FILES['img']['tmp_name'], '../icon/' . $_FILES['img']['name']);
}

switch ($_POST['table']) {
    case 're_cont':
        $row['icon'] = $_POST['icon'];
        $row['method'] = $_POST['method'];
        $row['cont'] = $_POST['cont'];
        break;
    case 're_job':
        $row['text'] = $_POST['text'];
        $row['cont'] = $_POST['cont'];
        break;
    case "re_exp":
        $row['year'] = $_POST['year'];
        $row['jtitle'] = $_POST['jtitle'];
        $row['cont'] = $_POST['cont'];
        break;
    case "re_skills":
        $row['type'] = $_POST['type'];
        $row['cont'] = $_POST['cont'];
        if (!empty($_POST['img'])) {
            $row['img'] = $_POST['img'];
        }
        break;
    case "re_pro2":
        $row['type'] = $_POST['type'];
        $row['name'] = $_POST['name'];
        $row['cont'] = $_POST['cont'];
        if (!empty($_POST['img'])) {
            $row['img'] = $_POST['img'];
        }
        if (!empty($_POST['bimg'])) {
            $row['bimg'] = $_POST['bimg'];
        }
        if (!empty($_POST['link'])) {
            $row['link'] = $_POST['link'];
        }
        $row['sk']=unserialize($row['sk']);
        $c=count($_POST['sk']);
        for($i=0;$i<$c;$i++){
            if($_POST['sk'][$i]!==""){
                $row['sk'][$i] = $_POST['sk'][$i];
            }
        }
        $row['sk']=serialize( $row['sk']);
        break;
    default:
        $row['text'] = $_POST['text'];
        break;
}
unset($_POST['do']);
unset($_POST['table']);
print_r($row['sk']);
// print_r($row);
$db->save($row);

to('../backend.php?do=' . $do);
