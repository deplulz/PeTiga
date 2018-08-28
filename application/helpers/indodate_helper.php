<?php
if (!function_exists('tgl')) {
    function tgl($tanggal)
    {
        $bulan = array(
            'Jan' => 'Jan',
            'Feb' => 'Feb',
            'Mar' => 'Mar',
            'Apr' => 'Apr',
            'May' => 'Mei',
            'Jun' => 'Juni',
            'Jul' => 'Juli',
            'Aug' => 'Ags',
            'Sep' => 'Sep',
            'Oct' => 'Okt',
            'Nov' => 'Nov',
            'Dec' => 'Des'
        );
        $part = explode('-', $tanggal);
        return $part[0] . '-' . $bulan[$part[1]] . '-' . $part[2];
    }
}