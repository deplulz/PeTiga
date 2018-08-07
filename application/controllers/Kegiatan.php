<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Kegiatan extends CI_Controller {
    public function index()
    {
        $data['title']='Kegiatan';
        $data['page']=$this->load->view('keg_v',$data,true);
        $this->load->view('template',$data);
    }
}
