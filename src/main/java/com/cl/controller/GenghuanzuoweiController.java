package com.cl.controller;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Map;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Date;
import java.util.List;
import javax.servlet.http.HttpServletRequest;

import com.cl.utils.ValidatorUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.cl.annotation.IgnoreAuth;

import com.cl.entity.GenghuanzuoweiEntity;
import com.cl.entity.view.GenghuanzuoweiView;

import com.cl.service.GenghuanzuoweiService;
import com.cl.service.TokenService;
import com.cl.utils.PageUtils;
import com.cl.utils.R;
import com.cl.utils.MPUtil;
import com.cl.utils.CommonUtil;
import java.io.IOException;

/**
 * 更换座位
 * 后端接口
 * @author 
 * @email 
 * @date 2024-03-13 14:51:25
 */
@RestController
@RequestMapping("/genghuanzuowei")
public class GenghuanzuoweiController {
    @Autowired
    private GenghuanzuoweiService genghuanzuoweiService;



    


    /**
     * 后端列表
     */
    @RequestMapping("/page")
    public R page(@RequestParam Map<String, Object> params,GenghuanzuoweiEntity genghuanzuowei,
		HttpServletRequest request){
		String tableName = request.getSession().getAttribute("tableName").toString();
		if(tableName.equals("yonghu")) {
			genghuanzuowei.setYonghuzhanghao((String)request.getSession().getAttribute("username"));
		}
        EntityWrapper<GenghuanzuoweiEntity> ew = new EntityWrapper<GenghuanzuoweiEntity>();

		PageUtils page = genghuanzuoweiService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, genghuanzuowei), params), params));

        return R.ok().put("data", page);
    }
    
    /**
     * 前端列表
     */
	@IgnoreAuth
    @RequestMapping("/list")
    public R list(@RequestParam Map<String, Object> params,GenghuanzuoweiEntity genghuanzuowei, 
		HttpServletRequest request){
        EntityWrapper<GenghuanzuoweiEntity> ew = new EntityWrapper<GenghuanzuoweiEntity>();

		PageUtils page = genghuanzuoweiService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, genghuanzuowei), params), params));
        return R.ok().put("data", page);
    }

	/**
     * 列表
     */
    @RequestMapping("/lists")
    public R list( GenghuanzuoweiEntity genghuanzuowei){
       	EntityWrapper<GenghuanzuoweiEntity> ew = new EntityWrapper<GenghuanzuoweiEntity>();
      	ew.allEq(MPUtil.allEQMapPre( genghuanzuowei, "genghuanzuowei")); 
        return R.ok().put("data", genghuanzuoweiService.selectListView(ew));
    }

	 /**
     * 查询
     */
    @RequestMapping("/query")
    public R query(GenghuanzuoweiEntity genghuanzuowei){
        EntityWrapper< GenghuanzuoweiEntity> ew = new EntityWrapper< GenghuanzuoweiEntity>();
 		ew.allEq(MPUtil.allEQMapPre( genghuanzuowei, "genghuanzuowei")); 
		GenghuanzuoweiView genghuanzuoweiView =  genghuanzuoweiService.selectView(ew);
		return R.ok("查询更换座位成功").put("data", genghuanzuoweiView);
    }
	
    /**
     * 后端详情
     */
    @RequestMapping("/info/{id}")
    public R info(@PathVariable("id") Long id){
        GenghuanzuoweiEntity genghuanzuowei = genghuanzuoweiService.selectById(id);
		genghuanzuowei = genghuanzuoweiService.selectView(new EntityWrapper<GenghuanzuoweiEntity>().eq("id", id));
        return R.ok().put("data", genghuanzuowei);
    }

    /**
     * 前端详情
     */
	@IgnoreAuth
    @RequestMapping("/detail/{id}")
    public R detail(@PathVariable("id") Long id){
        GenghuanzuoweiEntity genghuanzuowei = genghuanzuoweiService.selectById(id);
		genghuanzuowei = genghuanzuoweiService.selectView(new EntityWrapper<GenghuanzuoweiEntity>().eq("id", id));
        return R.ok().put("data", genghuanzuowei);
    }
    



    /**
     * 后端保存
     */
    @RequestMapping("/save")
    public R save(@RequestBody GenghuanzuoweiEntity genghuanzuowei, HttpServletRequest request){
    	genghuanzuowei.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(genghuanzuowei);
        genghuanzuoweiService.insert(genghuanzuowei);
        return R.ok();
    }
    
    /**
     * 前端保存
     */
    @RequestMapping("/add")
    public R add(@RequestBody GenghuanzuoweiEntity genghuanzuowei, HttpServletRequest request){
    	genghuanzuowei.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(genghuanzuowei);
        genghuanzuoweiService.insert(genghuanzuowei);
        return R.ok();
    }



    /**
     * 修改
     */
    @RequestMapping("/update")
    @Transactional
    public R update(@RequestBody GenghuanzuoweiEntity genghuanzuowei, HttpServletRequest request){
        //ValidatorUtils.validateEntity(genghuanzuowei);
        genghuanzuoweiService.updateById(genghuanzuowei);//全部更新
        return R.ok();
    }



    

    /**
     * 删除
     */
    @RequestMapping("/delete")
    public R delete(@RequestBody Long[] ids){
        genghuanzuoweiService.deleteBatchIds(Arrays.asList(ids));
        return R.ok();
    }
    
	








}
