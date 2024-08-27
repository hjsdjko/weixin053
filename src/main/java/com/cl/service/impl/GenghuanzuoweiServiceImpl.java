package com.cl.service.impl;

import org.springframework.stereotype.Service;
import java.util.Map;
import java.util.List;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import com.cl.utils.PageUtils;
import com.cl.utils.Query;


import com.cl.dao.GenghuanzuoweiDao;
import com.cl.entity.GenghuanzuoweiEntity;
import com.cl.service.GenghuanzuoweiService;
import com.cl.entity.view.GenghuanzuoweiView;

@Service("genghuanzuoweiService")
public class GenghuanzuoweiServiceImpl extends ServiceImpl<GenghuanzuoweiDao, GenghuanzuoweiEntity> implements GenghuanzuoweiService {
	
	
    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<GenghuanzuoweiEntity> page = this.selectPage(
                new Query<GenghuanzuoweiEntity>(params).getPage(),
                new EntityWrapper<GenghuanzuoweiEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<GenghuanzuoweiEntity> wrapper) {
		  Page<GenghuanzuoweiView> page =new Query<GenghuanzuoweiView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
	@Override
	public List<GenghuanzuoweiView> selectListView(Wrapper<GenghuanzuoweiEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public GenghuanzuoweiView selectView(Wrapper<GenghuanzuoweiEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}


}
