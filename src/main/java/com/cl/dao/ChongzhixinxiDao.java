package com.cl.dao;

import com.cl.entity.ChongzhixinxiEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.ChongzhixinxiView;


/**
 * 充值信息
 * 
 * @author 
 * @email 
 * @date 2024-03-13 14:51:26
 */
public interface ChongzhixinxiDao extends BaseMapper<ChongzhixinxiEntity> {
	
	List<ChongzhixinxiView> selectListView(@Param("ew") Wrapper<ChongzhixinxiEntity> wrapper);

	List<ChongzhixinxiView> selectListView(Pagination page,@Param("ew") Wrapper<ChongzhixinxiEntity> wrapper);
	
	ChongzhixinxiView selectView(@Param("ew") Wrapper<ChongzhixinxiEntity> wrapper);
	

}
