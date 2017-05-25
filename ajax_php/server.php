<?php
/**
 * Created by PhpStorm.
 * User: Dell Precision
 * Date: 4/27/2017
 * Time: 2:40 PM
 */

//get URL cua file hien tai;
$baseUrl = $_SERVER['PHP_SELF'];

//kiem tra co du lieu cua client gui len hay khong
if (isset($_REQUEST['pageTitle']) && $_GET['pageTitle'] == '') {
//   echo "Title = NULL";
    $pageNull = array('pageTitle' => '');
    echo json_encode($pageNull);
    die;

} else {
//    echo "Title khac NULL";
    $page = array('pageTitle' => $_REQUEST['pageTitle'] //lay KQ pageTitle tu client gui len
    , 'times' => 'Last updated: Today'
    , 'result' => 'OK');

//dung ham json_encode de chuyen mang $member thanh chuoi JSON khai báo nút tra ve cho client
    echo json_encode($page);

//ket thuc tra ve du lieu va stop khong cho chay tiep
    die;
}

?>

<!--//Kiem tra du lieu gui len:-->
<!--1. Neu pagetitle = null : tra ve 1 string co cau truc giong 1 jsonObject, thong bao "Ko tao dc page"-->
<!--2. Tat ca pagetitle dc tu dong them vao 1 chuoi 'Created by quangtv', -->
<!--vi du: pageTitle cua client gui len la 'My new page' thi server tra ve la 'My new page - Created by quangtv'-->

