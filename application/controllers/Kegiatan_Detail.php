<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Kegiatan_Detail extends CI_Controller {
    public function index()
    {
        $data['title']='Kegiatan';
        $data['page']=$this->load->view('keg_det_v',$data,true);
        $this->load->view('template',$data);
    }
}