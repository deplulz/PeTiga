<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Berita extends CI_Controller {
    public function index()
    {
        $data['title']='Berita';
        $data['page']=$this->load->view('berita_v',$data,true);
        $this->load->view('template',$data);
    }
}